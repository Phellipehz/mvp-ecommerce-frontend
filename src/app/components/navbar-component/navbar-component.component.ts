import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {RemoteService } from 'src/app/services/remote/remote.service';
import {CartService } from 'src/app/services/cart-service/cart.service';
import {TokenPersistenceService } from 'src/app/services/token-persistence/token-persistence.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  term: string;
  cartCount: Number;
  isLogged: Boolean;
  role: string;

  constructor(private route: ActivatedRoute, private router: Router, private remote: RemoteService, 
  private cart: CartService, private token: TokenPersistenceService) {}

  ngOnInit() {
    this.cartCount = this.cart.cartItensCount();
    this.isLogged = this.token.hasToken();

    if (this.isLogged) {
      const tokenPayload = decode(this.token.getStringToken());
      this.role = tokenPayload.role.authority;
    }
  }

  search() {
    if (this.term != null) {
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };
      this.router.navigate(['/search/' + this.term]);
    }
  }

  logout() {
    this.token.clearToken();
  }

}
