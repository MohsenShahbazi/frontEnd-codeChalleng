import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  rout: string = '';
  constructor(private http: HttpClient) { }


  add(model: any): any {
    return this.http.post( this.rout , model, {});
  }

  update(model: any) {
    return this.http.put(this.rout , model, {});
  }

  delete(id: number) {
    let params:HttpParams = new HttpParams();
    params = params.set('id', id);
    return this.http.delete(this.rout + 'delete', {params: params});
  }

  get(id: number): any {
    let params = new HttpParams().set('id', id);
    return this.http.get(this.rout + 'get', {params: params});
  }
}
