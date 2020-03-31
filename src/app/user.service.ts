import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:3000/api/"; 
  appUserUrl: string = "appUsers"
  firstName: String
  isLoggedIn = false;
  loginUrl = "appUsers/login"

  constructor(private _http: HttpClient) { }

  //http://localhost:3000/api/appUsers

  registerUser(userCredentials) {
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }

  loginUser(userCredentials){
    return this._http.post(`${this.baseUrl}${this.loginUrl}`, userCredentials);
  }
  
}
      //subscribe( res => {
        //sessionStorage.setItem('token', res.token);
        //sessionStorage.setItem('userId', res.userId);
    // })

    