import { Component } from '@angular/core';
import { GlobalserviceService } from 'src/app/services/globalservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public service:GlobalserviceService){

  }
  handlelogout(){
    try{
      this.service.logout()
      this.service.islogin =false
      localStorage.removeItem('user')
    }
    catch(e){
      console.log(e)
    }
  

  }
}
