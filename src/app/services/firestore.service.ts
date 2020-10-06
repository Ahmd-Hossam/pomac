import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private f_s:AngularFirestore, private fire_storage:AngularFireStorage, private user_ser:UsersService) { }

  adduser(id,name,pass){
    return this.f_s.doc('users/'+id).set({
      name,
      pass
    })
  }

  addnewTask(title:String, img:File, desc:string){
    return new Promise ((resolv,reject)=>{
      let ref=this.fire_storage.ref('tasksimgs/'+img.name);
      ref.put(img).then(()=>{
        ref.getDownloadURL().subscribe(photo =>{
          this.f_s.collection('tasks').add({
            title,
            photo,
            desc,
          }).then(()=>resolv("added"))
        })
      })
    })
  }

  getdata(){
    return this.f_s.collection('tasks').snapshotChanges()
  }

  delate(id){
    return this.f_s.doc(`tasks/${id}`).delete()
  }
}
