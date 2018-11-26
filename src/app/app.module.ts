import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrderItemComponentComponent } from './components/order-item-component/order-item-component.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ProductViewPageComponent } from './pages/product-view-page/product-view-page.component';
import { NewProductPageComponent } from './pages/new-product-page/new-product-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { CartItemComponentComponent } from './components/cart-item-component/cart-item-component.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProductItemLineComponent } from './components/product-item-line/product-item-line.component';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundPageComponent,
    ProductItemComponent,
    ProductViewPageComponent,
    HomePageComponent,
    ProductItemLineComponent,
    CartPageComponent,
    OrderItemComponentComponent,
    OrderPageComponent,
    CartItemComponentComponent,
    ProductListPageComponent,
    NewProductPageComponent,
    EditProductPageComponent,
    NavbarComponentComponent,
    SearchPageComponent,
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
