import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUNTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  // username: string | undefined;
  // password: string | undefined;

  constructor(
    private http: HttpClient
  ) { }

  executeJWTAuthenticationService(username: string, password: string) {


    return this.http.post<any>(
      `https://https://codingprojects2030.github.io/todo/db.json`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUNTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `bearer ${data.token}`);

            return data;
          }
        )
      );
  }


  executeAuthenticationService(username: string, password: string) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(
      `https://https://codingprojects2030.github.io/todo/db.json`,
      { headers: headers }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUNTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);

            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUNTHENTICATED_USER)
  }


  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()){}
       return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUNTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUNTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)

    
  }
}


export class AuthenticationBean {
  constructor(public message: string) { }

}
