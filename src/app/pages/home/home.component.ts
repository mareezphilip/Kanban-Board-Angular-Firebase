import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, child, get } from "firebase/database";
import { GlobalserviceService } from 'src/app/services/globalservice.service';
import {Task} from'src/app/interfaces/task'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // private itemsCollection: AngularFirestoreCollection<any>;
  // tasks: any;
  // taskarr:any[] =[]

  stages =["Done" , "in progress" , "To Do"]
  task : Task =
  {
    title:"",
    description:"",
    duedate:"",
    stage:"To Do"
  }
   constructor(private afs: AngularFirestore , private service:GlobalserviceService , private router:Router) {

  }

  // async ngOnInit() {
  //   try {
  //     this.tasks = await this.service.getalltasks();
  //     for(let task in this.tasks){
  //        this.taskarr.push({taskid:task, data:this.tasks[task]})
  //     }
  //     console.log("taskarr" , this.taskarr)
  //     console.log("ana fel home", this.tasks);
  //   } catch (error) {
  //     console.error("Error retrieving tasks:", error);
  //   }
  // }

  // addtask(){

  //   const obj = {
  //     title : "task 5",
  //     description:"hard task" ,
  //     duedate :"5/5/2024",
  //     stage:"To Do"
  //   }

  //   this.service.addtask(obj)
  //   alert("task added ")
  //   window.location.reload()
  // }

 
    async onSubmit(form: NgForm) {
      console.log("anaa hnaaa")
      if (form.valid) {
        try{
          this.service.addtask(this.task)
          console.log("task added")
          this.router.navigateByUrl("home")
          

         
        }
        catch(e){
          console.log(e)
        }
  
      }
    else{
      console.log("form invalid")
      console.log(form)
    }
    }
  }

