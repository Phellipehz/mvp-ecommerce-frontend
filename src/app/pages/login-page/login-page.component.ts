import { Component, OnInit, Inject } from '@angular/core';
import { RemoteService } from 'src/app/services/remote/remote.service';
import { Router } from '@angular/router';
import { TokenPersistenceService } from 'src/app/services/token-persistence/token-persistence.service';

declare var $: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private remote: RemoteService, private router: Router, 
    private tokenService : TokenPersistenceService) { }

  email: string;
  password: string;

  ngOnInit() {
    let token = this.tokenService.getStringToken();
    if(token != null){
      this.router.navigate(['/dashboard']);
    }
  }

  loginAction(){
    this.remote.login(this.email, this.password)
      .then(res => {
        this.router.navigate(['/dashboard'])
      })
      .catch(err => {
        $(".alert").show();
      });
  }

}
