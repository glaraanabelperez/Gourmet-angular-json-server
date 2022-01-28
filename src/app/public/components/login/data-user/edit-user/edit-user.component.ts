import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Company } from 'src/app/private-admin/customers/models/company.model';
import { AuthService } from '../../service/auth.service';
import { User } from '../../models/user.model';
import { StorageService } from '../../service/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editUser',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() user:User;
  
  public formEditUser : FormGroup;
  public company: boolean;

  constructor( 
    private authService: AuthService, 
    private toastr: ToastrService, 
    private readonly formBuilder : FormBuilder,
    private _storageService:StorageService,
    ) {
      this.initForm();
      this.setEditElement(this._storageService.getCurrentUser())
    }
  
  ngOnInit(): void {
  }

  initForm(){
    this.formEditUser = this.formBuilder.group({
      name : ["", [Validators.required, Validators.maxLength(20)]],
      secondName : ["", [Validators.required, Validators.maxLength(20)]],
      // email : ["", [Validators.required, Validators.maxLength(50), Validators.email]],
      // password : ["", [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      phone : ["", [Validators.required, Validators.maxLength(40),  Validators.pattern('^[0-9]+$')]],
      direction : ["", [Validators.required, Validators.maxLength(40)]],
      companyName : [""],
      companyPhone : [""],
      companyDirection : [""]
     });
  }

  get f(){return this.formEditUser.controls;}

  public cancel(){
    this.close.emit(true);
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
    // user.email=this.formEditUser.get('email').value;
    // user.password=this.formEditUser.get('password').value;
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
    console.log(user)
    this.formEditUser.controls['name'].setValue(user.name ? user.name : '');
    this.formEditUser.controls['secondName'].setValue(user.secondName ? user.secondName : '');
    this.formEditUser.controls['phone'].setValue(user.telephone ? user.telephone : '');
    this.formEditUser.controls['direction'].setValue(user.direction ? user.direction : '');
    this.formEditUser.controls['companyName'].setValue(user.company[0].name ? user.company[0].name : '');
    this.formEditUser.controls['companyPhone'].setValue(user.company[0].telephone ? user.company[0].telephone : '');
    this.formEditUser.controls['companyDirection'].setValue(user.company[0].direction ? user.company[0].direction  : '');

    window.scrollTo(0,0);
  }


}
