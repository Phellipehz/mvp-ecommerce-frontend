import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote/remote.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public remote: RemoteService) { }

  ngOnInit() {
  }

  loginAction(){
    this.remote.login(this.account)
      .then(res => {
       
      })
      .catch(err => {
            
      });
  }

}
