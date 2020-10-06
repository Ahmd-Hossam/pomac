import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import {FormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule}from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MatDatepickerModule} from '@angular/material/datepicker';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SideComponent } from './components/side/side.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { NavComponent } from './components/nav/nav.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideComponent,
    Comp2Component,
    Comp3Component,
    Comp1Component,
    NavComponent,
    AddTaskComponent,
    SignupComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAaF9Zf6SnCj1-4tx9urFIdqnbTl4nQiW4",
      authDomain: "pomac-d3a96.firebaseapp.com",
      databaseURL: "https://pomac-d3a96.firebaseio.com",
      projectId: "pomac-d3a96",
      storageBucket: "pomac-d3a96.appspot.com",
      messagingSenderId: "363345395364",
      appId: "1:363345395364:web:72e1bccf2a82b0caea7031",
      measurementId: "G-FY6MEMW87Z"
    }),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatDatepickerModule
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddTaskComponent]
})
export class AppModule { }
