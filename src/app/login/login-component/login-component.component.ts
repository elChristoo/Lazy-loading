import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],

})

export class LoginComponentComponent {
  hide = true;

  constructor (private _route: Router) {}
  customers(){
    this._route.navigate(['/customers']);
  }
}

