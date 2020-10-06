import { Component, OnInit } from '@angular/core';
import {Users} from 'src/app/interfaces/users';
import {UsersService} from 'src/app/services/users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  err:string;
  constructor(private user_ser:UsersService, private router:Router) { }

  ngOnInit(): void {
  }
  
  login(formVal){
    let data:Users=formVal.value;
    this.user_ser.login(data.email, data.password)
    .then(result => {
      this.router.navigate(['/comp1'])
    })
    .catch(err => this.err=err.message)
  }
}
