import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from './service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StorageService } from './service/storage.service';
import { LoginObject } from './models/loginObject.model';
import { Session } from './models/session.model';
import { PermissionModel } from './models/permissions.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public formLogin : FormGroup;
  public sessionUser: boolean;
  public name: string;

  constructor( 
    private authService: AuthService, 
    private _storageService:StorageService, 
    private toastr: ToastrService, 
    private readonly formBuilder : FormBuilder 
    ) {  
      this._storageService.permissions$.subscribe(
        result => {
          this.sessionUser=result?result.isUser:false;
          this.name=this._storageService.getCurrentUser().name
        })
   }
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formLogin = this.formBuilder.group({
      email : ["", [Validators.required, Validators.maxLength(40), Validators.email]],
      password : ["", [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]]
      });
  }

  get f(){return this.formLogin.controls;}

  login() {
    this.authService.login(new LoginObject(this.formLogin.value)).subscribe( data => {
      if(Object.entries(data).length != 0){
        this._storageService.setCurrentSession(new Session(data[0]));
        this.toastr.info("Bienvenido");
      }else{
        this.toastr.warning("Login incorrecto");
      }
    },
    error => {
      this.toastr.warning("Login incorrecto");
    });
    

  }

  logOut(){
    this._storageService.logout();
    this.sessionUser=false;
    this.toastr.warning("GRACIAS POR VISITARNOS");
  }


}
