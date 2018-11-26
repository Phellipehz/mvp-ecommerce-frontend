import {NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LoginPageComponent } from './pages/login-page/login-page.component';
import {PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import {HomePageComponent } from './pages/home-page/home-page.component';
import {ProductViewPageComponent } from './pages/product-view-page/product-view-page.component';
import {OrderPageComponent } from './pages/order-page/order-page.component';
import {CartPageComponent } from './pages/cart-page/cart-page.component';
import {ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import {EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';
import {NewProductPageComponent } from './pages/new-product-page/new-product-page.component';
import {SearchPageComponent } from './pages/search-page/search-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'login', component: LoginPageComponent },
  {path: 'cart', component: CartPageComponent },
  {path: 'product/:id', component: ProductViewPageComponent },
  {path: 'search/:term', component: SearchPageComponent },
  {path: 'order', component: OrderPageComponent,
    // canActivate: [RoleGuardService],
    // data: {
    //   expectedRole: 'ADMINISTRATOR'
    // }
  },
  {path: 'product/none/new', component: NewProductPageComponent,
    // canActivate: [RoleGuardService],
    // data: {
    //   expectedRole: 'ADMINISTRATOR'
    // }
  },
  {path: 'product/:id/edit', component: EditProductPageComponent,
    // canActivate: [RoleGuardService],
    // data: {
    //   expectedRole: 'ADMINISTRATOR'
    // }
  },
  {path: 'administration',
    component: ProductListPageComponent,
    // canActivate: [RoleGuardService],
    // data: {
    //   expectedRole: 'ADMINISTRATOR'
    // }
  },
  {path: '**', component: PageNotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
