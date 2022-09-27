import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxRainnier123xyLibModule } from 'nx-rainnier123xy-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxRainnier123xyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
