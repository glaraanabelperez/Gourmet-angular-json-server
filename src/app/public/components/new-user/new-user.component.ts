import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../login/service/auth.service';
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

  constructor( 
    private authService: AuthService, 
    private toastr: ToastrService, 
    private readonly formBuilder : FormBuilder 
    ) {}
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formNewUser = this.formBuilder.group({
      name : ["", [Validators.required, Validators.maxLength(20)]],
      secondName : ["", [Validators.required, Validators.maxLength(20)]],
      email : ["", [Validators.required, Validators.maxLength(40), Validators.email]],
      password : ["", [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      phone : ["", [Validators.required, Validators.maxLength(40),  Validators.pattern('^[0-9]+$')]],
      direction : ["", [Validators.required, Validators.maxLength(10)]],
      companyName : ["", [ Validators.maxLength(40)]],
      companyphone : ["", [Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      companyDirection : ["", [ Validators.maxLength(40)]]
     });
  }

  get f(){return this.formNewUser.controls;}

  public cancel(){
    this.formNewUser.reset();
  }

  public insertUser() {
    let user:User=new User();
    this.authService.insertUser(this.newUser(user)).subscribe( data => {
        this.formNewUser.reset();
        this.toastr.success('Bienvenido')
      },
      error =>{
        this.toastr.error('No se pudo guardar el elemento')
      });
  }

  public insertCompany(){
    this.company=this.company==true? false: true;
  }

  public newUser(user:User):User{

    user.name=this.formNewUser.get('name').value,
    user.secondName=this.formNewUser.get('secondName').value;
    user.email=this.formNewUser.get('email').value;
    user.password=this.formNewUser.get('password').value;
    user.telephone=this.formNewUser.get('phone').value;
    user.direction=this.formNewUser.get('direction').value;
    user.company.name=this.formNewUser.get('companyName').value;
    user.company.direction=this.formNewUser.get('companyDirection').value;
    user.company.telephone=this.formNewUser.get('companyPhone').value

    return user;
  }

}
