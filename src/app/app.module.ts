import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {DragDropModule}from '@angular/cdk/drag-drop'
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { RegisterComponent } from './components/register/register.component';
import { AuthpageComponent } from './pages/authpage/authpage.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { DragComponent } from './components/drag/drag.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TaskdetailsComponent } from './pages/taskdetails/taskdetails.component';


const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyAP9MqNxbOszb9T_1OxrqQPtKdzxyUpfKc",
  authDomain: "kanban-board-58bc9.firebaseapp.com",
  databaseURL: "https://kanban-board-58bc9-default-rtdb.firebaseio.com",
  projectId: "kanban-board-58bc9",
  storageBucket: "kanban-board-58bc9.appspot.com",
  messagingSenderId: "413734887556",
  appId: "1:413734887556:web:52cd71dc91c630349aa2d1",
  measurementId: "G-N461RKFW5S"
};


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthpageComponent,
    LoginComponent,
    HomeComponent,
    TaskComponent,
    DragComponent,
    NavbarComponent,
    TaskdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
