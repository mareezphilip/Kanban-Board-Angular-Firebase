import { Component } from '@angular/core';
import { GlobalserviceService } from 'src/app/services/globalservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  login: boolean
  constructor(public service: GlobalserviceService) {
    const item = localStorage.getItem('user');
    if (item) {
      this.login = true
    }
    else {
      this.login = false
    }
  }
  handlelogout() {
    try {
      this.service.logout()
      this.service.islogin = false
      localStorage.removeItem('user')
    }
    catch (e) {
      console.log(e)
    }


  }
}
