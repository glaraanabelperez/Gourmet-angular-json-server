import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { StorageService } from '../public/components/login/service/storage.service';

@Injectable({
  providedIn: 'root'
})

export class GuardsAdmin implements CanActivate {

  constructor(private authService :StorageService, private toastr: ToastrService){}
  
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |  boolean {
    if(this.authService.getPersmissions().isUser){
       return true;
    }else{
      this.toastr.error('DEBE RESGITRARSE PARA ACCEDER A ESTA SECCION')
    }
  }
  
}