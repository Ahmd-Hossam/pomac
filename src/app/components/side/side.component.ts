import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service'

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  isuser:boolean=false;
  constructor(private user_ser:UsersService) {
   }

  ngOnInit(): void {
    this.user_ser.authuser.subscribe(user =>{
      if(user){
        this.isuser=true;
        this.user_ser.userid=user.uid
      }else{
        this.isuser=false;
        this.user_ser.userid=''
      }
    })
  }
}
