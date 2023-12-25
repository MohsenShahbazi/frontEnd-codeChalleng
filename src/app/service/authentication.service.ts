import {Injectable} from '@angular/core';
import {BaseServiceService} from "./base-service.service";
import {HttpClient} from "@angular/common/http";
import * as moment from "moment";
import {Subject, ReplaySubject, Observable, of} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseServiceService {
  private authenticated: boolean = false;
  private authSecretKey:string = 'Bearer Token';
  constructor(
    http: HttpClient,
    private httpLocal: HttpClient) {
    super(http);
    this.rout = '/auth';
  }


  isAuthenticated(): Observable<boolean> {
    return of(this.authenticated);
  }

  login(username: string, password: string): boolean {
    if (username === 'Jaydeep Patil' && password === 'Pass@123') {
      const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA'; // Generate or receive the token from your server
      localStorage.setItem(this.authSecretKey, authToken);
      this.authenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration: string = localStorage.getItem("expires_at") as string;
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }
}
