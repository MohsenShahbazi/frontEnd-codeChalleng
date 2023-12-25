import {NgModule} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import {AuthInterceptor} from "../httpconfig.interceptor";
import {AuthGuard} from "../auth-guard.service";


export function createTranslateLoader(http: HttpClient): TranslateHttpLoader | any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      }
    }),
    NgxMapboxGLModule
  ],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  exports: [
    TranslateModule,
    NgxMapboxGLModule
  ]
})
export class SharedModule {
}
