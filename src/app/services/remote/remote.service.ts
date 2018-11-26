import {Injectable, Inject } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Token } from 'src/app/classes/token';
import {Product } from 'src/app/classes/product';
import {map, catchError } from 'rxjs/operators';
import {TokenPersistenceService } from '../token-persistence/token-persistence.service';
import {Order } from 'src/app/classes/order';
import {debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  host = 'http://localhost:8082/';

  constructor(private http: HttpClient, private tokenService: TokenPersistenceService) {}

  getHeadersWithAuthentication() {
    const header = new HttpHeaders();
    header.set('Authorization', this.tokenService.getStringToken());
    return header;
  }

  login(email: string, password: string) {
    const credentials = {email: email, password: password };
    return this.http.post<Token>(this.host + 'authentication', credentials)
    .pipe(
      map((response: Token) => {
        if (response != null) {
          this.tokenService.saveToken(response);
          return response;
        } else {
          throw new Error('Não foi possivel logar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

  findAllProducts() {
    return this.http.get<Array<Product>>(this.host + 'product').toPromise();
  }

  findProduct(id: Number) {
    return this.http.get<Product>(this.host + 'product/' + id).toPromise();
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.host + 'product', product).toPromise();
  }

  updateProduct(product: Product) {
    const id = product.id;
    product.id = null;

    return this.http.put<Product>(this.host + 'product/' + id, product).toPromise();
  }

  deleteProduct(product: Product) {
    const id = product.id;
    product.id = null;

    return this.http.delete<Boolean>(this.host + 'product/' + id)
    .pipe(
      map((response: Boolean) => {
        // if (response.status == 402) {
        //   return true;
        // } else {
        //   throw new Error('Não foi possivel acessar no sistema neste momento.');
        // }
      }))
    .toPromise();
  }

  addOrder(order: Order) {
    return this.http.post<Order>(this.host + 'order', order).toPromise();
  }

  findAllOrders() {
    const header = this.getHeadersWithAuthentication();
    const opt = {headers: header };
    return this.http.get<Array<Order>>(this.host + 'order', opt)
    .pipe(
      map((response: Array<Order>) => {
        if (response != null) {
          return response;
        } else {
          throw new Error('Não foi possivel acessar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

  findProductsByNameOrCategory(term: string) {
    return this.http.get<Array<Product>>(this.host + 'product/search/' + term)
    .pipe(
      map((response: Array<Product>) => {
        if (response != null) {
          return response;
        } else {
          throw new Error('Não foi possivel acessar no sistema neste momento.');
        }
      }))
    .toPromise();
  }

  getAllCategories() {
    return this.http.get<Array<string>>(this.host + 'product/category').toPromise();
  }

}
