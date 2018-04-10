import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LicenseComponent } from './micro/license/license.component';
import { HeaderComponent } from './micro/header/header.component';
import { FooterComponent } from './micro/footer/footer.component';
import { BusinessComponent } from './pages/business/business.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TitleBannerComponent } from './micro/title-banner/title-banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LicenseComponent,
    HeaderComponent,
    FooterComponent,
    BusinessComponent,
    ProductsComponent,
    ContactComponent,
    TitleBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
