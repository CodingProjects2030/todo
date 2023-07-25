import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  // username: string | undefined;
  // password: string | undefined;

  constructor() { }


  authenticate(username: string, password: string){
    if(username === "Afaf" && password=== 'dummy'){
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;

  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
