import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.scss']
})
export class DataUserComponent implements OnInit {

  public editUser:boolean=false;
  public user:User;

  constructor(private _storageService:StorageService) { 
    this.user=this._storageService.getCurrentUser();
  }

  ngOnInit(): void {
  }

  public onClose(e){
    if(this.editUser){
      this.editUser=false;
    }else{
      this.editUser=true;
    }
  }

}
