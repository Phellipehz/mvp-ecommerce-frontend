import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  //{ path: '', component: HomePageComponent },
  //{ path: 'product/:id', component: ProductPageComponent },
  { path: '**', component: PageNotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
