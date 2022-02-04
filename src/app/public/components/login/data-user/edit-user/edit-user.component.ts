import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Company } from 'src/app/private-admin/customers/models/company.model';
import { AuthService } from '../../service/auth.service';
import { StorageService } from '../../service/storage.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-editUser',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() user:User;
  
  public formEditUser : FormGroup;
  public userToEdit:User;

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
      lastName : ["", [Validators.required, Validators.maxLength(20)]],
      // email : ["", [Validators.required, Validators.maxLength(50), Validators.email]],
      pass : ["", [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      phone : ["", [Validators.required, Validators.maxLength(40),  Validators.pattern('^[0-9]+$')]],
      direction : ["", [Validators.required, Validators.maxLength(40)]],
     });
  }

  get f(){return this.formEditUser.controls;}

  public cancel(){
    this.close.emit(true);
  }

  public editUser() {
    this.authService.editUser(this.newUser(), this.userToEdit.id).subscribe( 
      data => {
        console.log(data)
        this.formEditUser.reset();
        this.toastr.success('Datos Editados')
      },
      error =>{
        this.toastr.error('No se pudo guardar el elemento', error.message)
      });
  }

  public newUser():User{

    let user:User=new User();
    user.name=this.formEditUser.get('name').value,
    user.lastName=this.formEditUser.get('lastName').value;
    user.email=this.userToEdit.email;
    user.pass=this.formEditUser.get('pass').value;
    user.phone=this.formEditUser.get('phone').value;
    user.direction=this.formEditUser.get('direction').value;

    return user;
  }

  public setEditElement(user:User) :void{
    this.userToEdit=user;
    this.formEditUser.controls['name'].setValue(user.name ? user.name : '');
    this.formEditUser.controls['lastName'].setValue(user.lastName ? user.lastName : '');
    // this.formEditUser.controls['email'].setValue(user.lastName ? user.lastName : '');
    this.formEditUser.controls['pass'].setValue(user.pass ? user.pass : '');
    this.formEditUser.controls['phone'].setValue(user.phone ? user.phone : '');
    this.formEditUser.controls['direction'].setValue(user.direction ? user.direction : '');
    window.scrollTo(0,0);
  }


}
