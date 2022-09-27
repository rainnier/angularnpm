import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NxRainnier123xyLibComponent } from './nx-rainnier123xy-lib.component';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    NxRainnier123xyLibComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    NxRainnier123xyLibComponent
  ]
})
export class NxRainnier123xyLibModule { }
