import { Injectable, Inject } from '@angular/core';
import { Token } from 'src/app/classes/token';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class TokenPersistenceService {

  tokenField : string = "authtoken";

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

  hasToken(){
    return this.storage.get(this.tokenField) != null;
  }

  saveToken(token: Token){
    this.storage.set(this.tokenField, token.token);
  }

  getStringToken() {
    return this.storage.get(this.tokenField);
  }

  clearToken(){
    this.storage.remove(this.tokenField);
  }

}
