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

  host: string = "http://localhost:8082/";

  constructor(private http: HttpClient, private tokenService : TokenPersistenceService) { }

  login(email:string, password:string){
    
    let credentials = { email: email, password: password };

    return this.http.post<HttpResponse<Token>>(this.host + "authentication", credentials)
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
    return this.http.get<HttpResponse<Array<Product>>>(this.host + "product")
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
    return this.http.get<HttpResponse<Product>>(this.host + "product/" + id)
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
    return this.http.post<HttpResponse<Product>>(this.host + "product", product)
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

    return this.http.put<HttpResponse<Product>>(this.host + "product/" + id, product)
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

    return this.http.delete<HttpResponse<Boolean>>(this.host + "product/" + id)
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
    return this.http.post<HttpResponse<Order>>(this.host + "order", order)
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
    return this.http.get<HttpResponse<Array<Order>>>(this.host + "order")
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

  findProductsByNameOrCategory(term: string){
    return this.http.get<HttpResponse<Array<Product>>>(this.host + "product/search/"+ term)
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

  findProductsByCategory(term: string){
    return this.http.get<HttpResponse<Array<Product>>>(this.host + "product/category/"+ term)
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

  getAllCategories(){
    return this.http.get<HttpResponse<Array<string>>>(this.host + "product/category")
    .pipe(
      map((response : HttpResponse<Array<string>>) => { 
        if (response.body != null) {
          return response.body;
        } else {
          throw new Error('Não foi possivel acessar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

}
