import {Component, OnInit, Inject } from '@angular/core';
import {RemoteService } from 'src/app/services/remote/remote.service';
import {Router } from '@angular/router';
import {TokenPersistenceService } from 'src/app/services/token-persistence/token-persistence.service';
import decode from 'jwt-decode';

declare var $: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private remote: RemoteService, private router: Router, private tokenService: TokenPersistenceService) {}

  email: string;
  password: string;

  ngOnInit() {
    this.redirect();
  }

  loginAction() {
    this.remote.login(this.email, this.password)
      .then(res => {
        this.redirect();
      })
      .catch(err => {
        console.error(err);
        $('.alert').show();
      });
  }

  redirect() {
    const token = this.tokenService.getStringToken();
    if (this.tokenService.hasToken()) {
      const decodedToken = decode(token);

      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
        // or
        //return true;
      };

      if (decodedToken.role.authority === 'ADMINISTRATOR') {
        this.router.navigate(['/administration']);
      } else if (decodedToken.role.authority === 'CLIENT') {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/']);
      }
    }
  }

}
