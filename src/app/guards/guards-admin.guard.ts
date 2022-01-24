import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../public/components/login/service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsAdmin implements CanActivate {

  constructor(private authService :StorageService){}
  
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  | Promise<boolean> |  boolean   {
   
    if(this.authService.getPermissions().getUser()!=null && this.authService.getPermissions().getAuthAdmin()){
       return true;
   }
   
  }
  
}