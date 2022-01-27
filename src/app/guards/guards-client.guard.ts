import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { StorageService } from '../public/components/login/service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsClient implements CanActivate {

  constructor(private _serviceStorage :StorageService, private toastr: ToastrService){}
  
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  | Promise<boolean> |  boolean   {
   
    if(this._serviceStorage.getCurrentSession()!=null){
        return true;
    }else{
      this.toastr.error('DEBE RESGITRARSE PARA ACCEDER')
      return false;
    }
    
  }
  
}