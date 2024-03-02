import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {
  NgxBootstrapIconsModule,
  calendar4,
  envelope,
  facebook,
  instagram,
  list,
  shareFill,
  star,
  starFill,
  twitter,
} from 'ngx-bootstrap-icons';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

const icons = {
  list,
  calendar4,
  starFill,
  star,
  shareFill,
  facebook,
  twitter,
  envelope,
  instagram,
};

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(icons),
    HttpClientModule,
    DatePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
