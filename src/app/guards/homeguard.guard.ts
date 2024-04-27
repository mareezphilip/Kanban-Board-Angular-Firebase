import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalserviceService } from '../services/globalservice.service';

@Injectable({
  providedIn: 'root'
})
export class HomeguardGuard implements CanActivate {
  constructor(private router: Router , private service:GlobalserviceService) {}
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.service.islogin){
        return true;
      }
      else {
        this.router.navigate(['']); // Redirect to the login page
        return false;
   
  }
  
    }
  }
