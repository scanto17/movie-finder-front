import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    email: null,
    password: null,
  };

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this._userService.loginUser(this.form).subscribe( (res: any)=> {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this._userService.firstName = res.userData.firstName;
      this._userService.lastName = res.userData.lastName;
      console.log (res)
      this._userService.isLoggedIn = true;
      this.goToDash();
    })
  }
  goToDash(){
    this.router.navigate(['/main'])

  }
}