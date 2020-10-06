import { Injectable } from '@angular/core';
import {AngularFireAuth} from'@angular/fire/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userid:string='';
  authuser:Observable<firebase.User>
  constructor(private auth:AngularFireAuth) {
    this.authuser=auth.user
   }


  sginup(email,password){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  login(email,password){
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  logout(){
    return this.auth.signOut()
  }
}
