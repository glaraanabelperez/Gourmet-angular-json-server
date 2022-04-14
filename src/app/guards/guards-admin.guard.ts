import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { StorageService } from '../public/components/login/service/storage.service';

@Injectable({
  providedIn: 'root'
})

export class GuardsAdmin implements CanActivate {

  constructor(private _serviceStorage :StorageService, private toastr: ToastrService){}
  
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |  boolean {
    if(this._serviceStorage.getCurrentSession()!=null){
      if(this._serviceStorage.getCurrentSession().authAdmin){
        return true;
      }
    }else{
      this.toastr.error('ES NECESARIO REGISTRSE PARA ACCEDER')
      return false;
    }
  }
  
}