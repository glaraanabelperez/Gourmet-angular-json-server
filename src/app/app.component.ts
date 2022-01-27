import { Component } from '@angular/core';
import { Session } from './public/components/login/models/session.model';
import { User } from './public/components/login/models/user.model';
import { StorageService } from './public/components/login/service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-gourmet';
  sessionUser: any;
  sessionAdmin:boolean;

  constructor(public _storageSession:StorageService) {}

  ngOnInit(): void {
    this._storageSession.permissions$.subscribe(result => {
        if(result){
          this.sessionUser=result.isUser;
          this.sessionAdmin=result.isAdmin;
          console.log(this.sessionUser)
        }
      })
  }

}
