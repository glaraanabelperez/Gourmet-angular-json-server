import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Company } from 'src/app/private-admin/customers/models/company.model';
import { AuthService } from '../../service/auth.service';
import { User } from '../../models/user.model';
import { StorageService } from '../../service/storage.service';


@Component({
  selector: 'app-editUser',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {

  public formEditUser : FormGroup;
  company: boolean;

  constructor( 
    private authService: AuthService, 
    private toastr: ToastrService, 
    private readonly formBuilder : FormBuilder,
    private _storageService:StorageService
    ) {
      this.initForm();
      this.setEditElement(this._storageService.getCurrentUser())
    }
  
  ngOnInit(): void {
  }

  initForm(){
    this.formEditUser = this.formBuilder.group({
      name : ["", [Validators.required, Validators.maxLength(20)]],
      // secondName : ["", [Validators.required, Validators.maxLength(20)]],
      // email : ["", [Validators.required, Validators.maxLength(50), Validators.email]],
      // password : ["", [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      // phone : ["", [Validators.required, Validators.maxLength(40),  Validators.pattern('^[0-9]+$')]],
      // direction : ["", [Validators.required, Validators.maxLength(40)]],
      // companyName : [""],
      // companyPhone : [""],
      // companyDirection : [""]
     });
  }

  get f(){return this.formEditUser.controls;}

  public cancel(){
    this.formEditUser.reset();
  }

  public editUser() {
    let user:User=new User();
    this.authService.editUser(this.newUser(user)).subscribe( data => {
        this.formEditUser.reset();
        this.toastr.success('Datos Editados')
      },
      error =>{
        this.toastr.error('No se pudo guardar el elemento')
      });
}


  public insertCompany(){
    this.company=this.company==true? false: true;
  }

  public newUser(user:User):User{

    user.name=this.formEditUser.get('name').value,
    user.secondName=this.formEditUser.get('secondName').value;
    user.email=this.formEditUser.get('email').value;
    user.password=this.formEditUser.get('password').value;
    user.telephone=this.formEditUser.get('phone').value;
    user.direction=this.formEditUser.get('direction').value;

    let com=new Company();
    com.name=this.formEditUser.get('companyName').value;
    com.direction=this.formEditUser.get('companyDirection').value;
    com.telephone=this.formEditUser.get('companyPhone').value;
    user.company=com;

    return user;
  }

  public setEditElement(user:User) :void{
    this.formEditUser.controls['name'].setValue(user.name ? user.name : '');
    // this.formMeals.controls['title'].setValue(meal.tittle ? meal.tittle : '');
    // this.formMeals.controls['description'].setValue(meal.description ? meal.description : '');
    window.scrollTo(0,0);
  }


}
