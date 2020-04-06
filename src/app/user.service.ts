import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:3000/api/"; 
  appUserUrl: string = "appUsers"
  firstName: String
  lastName: String
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

  favMovie(movie){
   let token = sessionStorage.getItem('token'); 
   let userId = sessionStorage.getItem('userId');

   console.log("movie:", movie)
    
     this._http.post(`${this.baseUrl}appUsers/${userId}/favorites?access_token=${token}`, movie)
        .subscribe( (res:any) => {
          console.log(res)
      })
  }
  
}
     
//http://localhost:3000/api/appUsers/5e891211232e3e596710a9d7/favorites?access_token=9z52vlNxvG1Wg1FVXW0UOUQoQCWREUzb85fjj9DmwruiwZuw7Bt8gw4x2t7ZyNOX


//subscribe( res => {
        //sessionStorage.setItem('token', res.token);
        //sessionStorage.setItem('userId', res.userId);
    // })

