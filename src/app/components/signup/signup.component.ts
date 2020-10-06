import { Component, OnInit } from '@angular/core';
import {Users} from 'src/app/interfaces/users';
import {UsersService} from 'src/app/services/users.service';
import {FirestoreService} from 'src/app/services/firestore.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errmsg:string=''
  constructor(private users_ser:UsersService, private fs:FirestoreService, private router:Router) { }

  ngOnInit(): void {
  }
  
  signup(form){
    let data:Users=form.value;
    this.users_ser.sginup(data.email, data.password)
    .then(result => {
      this.router.navigate(['/comp1'])
      this.fs.adduser(result.user.uid, data.name, data.password);
    })
    .catch(err => this.errmsg=err.message)
  }
}
