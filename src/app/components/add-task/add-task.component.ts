import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { NgForm } from '@angular/forms';
import { Card } from 'src/app/interfaces/card';
import {FirestoreService} from 'src/app/services/firestore.service'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @ViewChild('photo') myimg:ElementRef
  constructor(private dialog:MatDialog, private f_s:FirestoreService) { }

  ngOnInit(): void {
  }
  
  submit(form:NgForm){
    let title=(<Card>form.value).title;
    let photo=(<HTMLInputElement>this.myimg.nativeElement).files[0];
    let desc=(<Card>form.value).desc;
    this.f_s.addnewTask(title,photo,desc).then(()=>{this.dialog.closeAll()});
  }

  close(){
    this.dialog.closeAll()
  }
}
