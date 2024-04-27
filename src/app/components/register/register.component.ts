import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Register} from 'src/app/interfaces/register'
import { GlobalserviceService } from 'src/app/services/globalservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private service:GlobalserviceService , private router:Router){
  }
  model : Register =
  { 
    name:"",
    email:"",
    password:"",
    phone:"",
    gender:"",
  }
  ;

 
  selectedFile: File | null = null; 
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  async handleregister(form : NgForm){
    console.log(this.model)
    const userdata = {email:this.model.email , password:this.model.password}
    try{
      const res = await this.service.signup(userdata)
      console.log("register done")
      this.service.islogin=true
      localStorage.setItem('user' , JSON.stringify(res.user))
      this.router.navigateByUrl("home")

    }
   catch(e){
      console.log(e)
   }
     
       
   



}
}
