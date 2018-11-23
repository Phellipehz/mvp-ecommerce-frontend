import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Token } from 'src/app/classes/token';
import { map, catchError } from 'rxjs/operators';
import { TokenPersistenceService } from '../token-persistence/token-persistence.service';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http: HttpClient, private tokenService : TokenPersistenceService) { }

  login(email:string, password:string){
    let credentials;
    return this.http.post<HttpResponse<Token>>("http://localhost:9000/authentication", credentials)
    .pipe(
      map((response : HttpResponse<Token>) => { 
        if (response.body != null) {
          this.tokenService.saveToken(response.body); 
          return response.body;
        } else {
          throw new Error('Não foi possivel logar no sistema neste momento.');
        }
      }))
    .pipe(
      catchError(err => {
        console.error('An error occurred:', err.error);
        throw new Error('Não foi possivel logar no sistema neste momento.');
      })
    )
    .toPromise();
  }

}
