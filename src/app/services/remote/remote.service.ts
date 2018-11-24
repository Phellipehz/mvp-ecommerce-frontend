import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Token } from 'src/app/classes/token';
import { Product } from 'src/app/classes/product';
import { map, catchError } from 'rxjs/operators';
import { TokenPersistenceService } from '../token-persistence/token-persistence.service';
import { Order } from 'src/app/classes/order';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http: HttpClient, private tokenService : TokenPersistenceService) { }

  login(email:string, password:string){
    
    let credentials = { email: email, password: password };

    return this.http.post<HttpResponse<Token>>("http://localhost:8082/authentication/", credentials)
    .pipe(
      map((response : HttpResponse<Token>) => { 
        if (response.body != null) {
          this.tokenService.saveToken(response.body); 
          return response.body;
        } else {
          throw new Error('Não foi possivel logar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

  findAllProducts(){
    return this.http.get<HttpResponse<Array<Product>>>("http://localhost:8082/product/")
    .pipe(
      map((response : HttpResponse<Array<Product>>) => { 
        if (response.body != null) {
          return response.body;
        } else {
          throw new Error('Não foi possivel acessar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

  findProduct(id: Number){
    return this.http.get<HttpResponse<Product>>("http://localhost:8082/product/"+ id)
    .pipe(
      map((response : HttpResponse<Product>) => { 
        if (response.body != null) {
          return response.body;
        } else {
          throw new Error('Não foi possivel acessar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

  addProduct(product: Product){
    return this.http.post<HttpResponse<Product>>("http://localhost:8082/product/", product)
    .pipe(
      map((response : HttpResponse<Product>) => { 
        if (response.body != null) {
          return response.body;
        } else {
          throw new Error('Não foi possivel acessar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

  updateProduct(product: Product){
    let id = product.id;
    product.id = null;

    return this.http.put<HttpResponse<Product>>("http://localhost:8082/product/" + id, product)
    .pipe(
      map((response : HttpResponse<Product>) => { 
        if (response.body != null) {
          return response.body;
        } else {
          throw new Error('Não foi possivel acessar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

  deleteProduct(product: Product){
    let id = product.id;
    product.id = null;

    return this.http.delete<HttpResponse<Boolean>>("http://localhost:8082/product/" + id)
    .pipe(
      map((response : HttpResponse<Boolean>) => { 
        if (response.status == 402) {
          return true;
        } else {
          throw new Error('Não foi possivel acessar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

  addOrder(order: Order){
    return this.http.post<HttpResponse<Order>>("http://localhost:8082/order/", order)
    .pipe(
      map((response : HttpResponse<Order>) => { 
        if (response.status == 402) {
          return true;
        } else {
          throw new Error('Não foi possivel acessar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

  findAllOrders(){
    return this.http.get<HttpResponse<Array<Order>>>("http://localhost:8082/order/")
    .pipe(
      map((response : HttpResponse<Array<Order>>) => { 
        if (response.body != null) {
          return response.body;
        } else {
          throw new Error('Não foi possivel acessar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

}
