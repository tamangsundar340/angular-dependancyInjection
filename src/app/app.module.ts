import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Card1Component } from './components/card1/card1.component';
import { Card2Component } from './components/card2/card2.component';
import { ServiceService } from './services/service.service';

@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    Card2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
