import { Component } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GlobalserviceService } from 'src/app/services/globalservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth , private service:GlobalserviceService , private router : Router) { }
  loginForm : Login =
  {
    email:"",
    password:""
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful, perform any necessary actions
        console.log('Login successful', userCredential.user);
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
      });
  }

 async onSubmit(form: NgForm) {
    console.log("anaa hnaaa")
    if (form.valid) {
      try{
        const res =  await   this.service.login(this.loginForm)
        console.log("login done")
        this.service.islogin=true
        this.router.navigateByUrl("home")
        localStorage.setItem('user' , JSON.stringify(res.user))
        

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

