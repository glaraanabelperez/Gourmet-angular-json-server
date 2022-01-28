import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../login/service/auth.service';
import { User } from '../login/models/user.model';
import { Company } from 'src/app/private-admin/customers/models/company.model';
import { Router } from '@angular/router';


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
    private readonly formBuilder : FormBuilder,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formNewUser = this.formBuilder.group({
      name : ["", [Validators.required, Validators.maxLength(20)]],
      secondName : ["", [Validators.required, Validators.maxLength(20)]],
      email : ["", [Validators.required, Validators.maxLength(50), Validators.email]],
      password : ["", [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      phone : ["", [Validators.required, Validators.maxLength(40),  Validators.pattern('^[0-9]+$')]],
      direction : ["", [Validators.required, Validators.maxLength(40)]],
      companyName : [""],
      companyPhone : [""],
      companyDirection : [""]
     });
  }

  get f(){return this.formNewUser.controls;}

  public cancel(){
    this.formNewUser.reset();
    this.router.navigate(['/meals']);
  }

  public insertUser() {
    this.authService.veryifyEmail(this.formNewUser.get('email').value).subscribe( data => {
      if(Object.entries(data).length != 0){
        this.toastr.warning('EMAIL DUPLICADO')
        return;
      }else{
        let user:User=new User();
        this.authService.insertUser(this.newUser(user)).subscribe( data => {
            this.formNewUser.reset();
            this.toastr.success('Bienvenido')
          },
          error =>{
            this.toastr.error('No se pudo guardar el elemento')
          });
      }
    })
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

    let com=new Company();
    com.name=this.formNewUser.get('companyName').value;
    com.direction=this.formNewUser.get('companyDirection').value;
    com.telephone=this.formNewUser.get('companyPhone').value;
    user.company=com;

    return user;
  }

}
