import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';


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
  exports: [
    TranslateModule,
    NgxMapboxGLModule
  ]
})
export class SharedModule {
}
