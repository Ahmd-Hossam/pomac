import { Component, OnInit } from '@angular/core';
import {Card} from 'src/app/interfaces/card';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { AddTaskComponent } from '../add-task/add-task.component';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  mydate:Date;
  cards:Card[]
  constructor(private dialog:MatDialog, private f_stor:FirestoreService) {
    this.mydate=new Date()
   }

  ngOnInit(): void {
    this.f_stor.getdata().subscribe(data =>{
      this.cards=data.map(ele =>{
        return{
          id:ele.payload.doc.id,
          title:ele.payload.doc.data()['title'],
          photo:ele.payload.doc.data()['photo'],
          desc:ele.payload.doc.data()['desc'],
          date:this.mydate
        }
      })
    })
  }


  add(){
       const dialconfg=new MatDialogConfig();
             dialconfg.disableClose=true;
             dialconfg.autoFocus=true;
             dialconfg.width="60%";
      this.dialog.open(AddTaskComponent)
  }

  delate(index){
    this.f_stor.delate(this.cards[index].id)
  }
}
