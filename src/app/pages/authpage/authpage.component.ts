import { Component } from '@angular/core';

@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.css']
})
export class AuthpageComponent {
  login:boolean=true
  register:boolean=false
  reset:boolean=false
  
    showlogin(){
  
  this.login=true
  this.register=false
  this.reset=false
  
  
    }
    showregister(){
      this.login=false
      this.register=true
      this.reset=false
      
      
        }
      showresetpass(){
          this.login=false
          this.register=false
          this.reset=true
          
      }
}
