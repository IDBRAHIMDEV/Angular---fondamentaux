import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: Http) { }
   
  getUsers() {
   return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}