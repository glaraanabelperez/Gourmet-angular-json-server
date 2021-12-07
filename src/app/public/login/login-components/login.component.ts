import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mensajerror:String;
  adminLogguedIn:boolean;

  constructor( public authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login( email: string, password: string) {
    this.mensajerror="";
    this.authService.login(email, password).subscribe( data => {
      console.log(data);
      this.authService.setSession(data);
    },
    error => {
      console.log(error);
    });
  }

  logOut() :boolean{
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
  }


}
