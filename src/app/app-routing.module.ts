import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductViewPageComponent } from './pages/product-view-page/product-view-page.component';
import { ProductManagementPageComponent } from './pages/product-management-page/product-management-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: HomePageComponent },
  { path: 'product/:id', component: ProductViewPageComponent },
  { path: 'admin', component: ProductManagementPageComponent },
  { path: '**', component: PageNotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
