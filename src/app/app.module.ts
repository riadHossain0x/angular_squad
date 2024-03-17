import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './navbar/navbar.component';
import { MainCardComponent } from './maincard/maincard.component';
import { UsercardComponent } from './usercard/usercard.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    MainCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsercardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
