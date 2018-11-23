import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http: HttpClient) { }

  login(email:string, password:string){
    return this.http.post("http://localhost:9000/authentication")
      .map((response : HttpResponse<Token>) => { 
        if (response.body != null) {
          console.log(response.body);
          //this.storeage.set('token', response.body.token); 
          return response.body;
        } else {
          throw new Error('Não foi possivel logar no sistema neste momento.');
        }
      })
      .catch(err => {
        console.error('An error occurred:', err.error);
        throw new Error('Não foi possivel logar no sistema neste momento.');
      })
      .toPromise();
  }

}
