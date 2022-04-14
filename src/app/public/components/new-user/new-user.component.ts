import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../login/service/auth.service';
import { Company } from 'src/app/private-admin/customers/models/company.model';
import { Router } from '@angular/router';
import { User } from '../login/models/user.model';


@Component({
  selector: 'app-newUser',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})

export class NewUserComponent implements OnInit {

  public formNewUser : FormGroup;
  public sessionUser: boolean;
  company: boolean;
  isLoadingResults: boolean;

  constructor( 
    private authService: AuthService, 
    private toastr: ToastrService, 
    private readonly formBuilder : FormBuilder,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formNewUser = this.formBuilder.group({
      name : ["", [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')]],
      lastName : ["", [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')]],
      email : ["", [Validators.required, Validators.maxLength(50), Validators.email]],
      pass : ["", [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      phone : ["", [Validators.required, Validators.maxLength(40),  Validators.pattern('^[0-9]+$')]],
      direction : ["", [Validators.required, Validators.maxLength(40)]], 
      companyName : ["", [Validators.required, Validators.maxLength(40),Validators.pattern('^[a-zA-Z]+$')]],
     });
  }

  get f(){return this.formNewUser.controls;}

  public cancel(){
    this.formNewUser.reset();
    this.router.navigate(['/meals']);
  }

  public insertUser() {
    this.isLoadingResults=true;
    let user:User=new User();
    this.authService.insertUser(this.newUser(user)).subscribe( 
      data => {
        this.isLoadingResults=false;
        this.formNewUser.reset();
        this.toastr.success('Bienvenido')
      },
      error =>{
        this.isLoadingResults=false;
        this.toastr.error('No se pudo guardar el elemento, pruebe con otro email')
      });
}


  public insertCompany(){
    this.company=this.company==true? false: true;
  }

  public newUser(user:User):User{

    user.name=this.formNewUser.get('name').value,
    user.lastName=this.formNewUser.get('lastName').value;
    user.email=this.formNewUser.get('email').value;
    user.pass=this.formNewUser.get('pass').value;
    user.phone=this.formNewUser.get('phone').value;
    user.direction=this.formNewUser.get('direction').value;
    user.companyName=this.formNewUser.get('companyName').value;
    return user;
  }

}
