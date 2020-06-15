import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InnotecModules } from '@innotec/materials';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InnotecModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
