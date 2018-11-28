import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { TokenPersistenceService } from '../../services/token-persistence/token-persistence.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public token: TokenPersistenceService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = this.token.getStringToken();
    const tokenPayload = decode(token);

    if (!this.token.hasToken() || tokenPayload.role.authority !== expectedRole) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
