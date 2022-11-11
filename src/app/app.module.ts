import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransComponent } from './trans/trans.component';
import { TypeComponent } from './type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    TransComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
