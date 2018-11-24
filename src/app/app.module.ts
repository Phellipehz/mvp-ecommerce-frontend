import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductManagementPageComponent } from './pages/product-management-page/product-management-page.component';
import { ProductViewPageComponent } from './pages/product-view-page/product-view-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CheckoutItemComponent } from './components/checkout-item/checkout-item.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemLineComponent } from './product-item-line/product-item-line.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundPageComponent,
    ProductManagementPageComponent,
    ProductItemComponent,
    CheckoutItemComponent,
    ProductViewPageComponent,
    HomePageComponent,
    ProductItemLineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StorageServiceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
