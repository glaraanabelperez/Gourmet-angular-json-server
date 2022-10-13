import { Component } from '@angular/core';
import { StorageService } from './public/components/login/service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-gourmet';
  sessionUser: boolean;
  sessionAdmin:boolean;

  constructor(public _storageSession:StorageService) {}

  ngOnInit(): void {
    this._storageSession.permissions$.subscribe(result => {
        if(result){
          this.sessionUser=result.isUser && !result.isAdmin ? true : false;
          this.sessionAdmin=result.isAdmin;
        }
      })
  }


}
