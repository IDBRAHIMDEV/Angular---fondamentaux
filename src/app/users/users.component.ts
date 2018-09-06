import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users = [];
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.recupUser();
  }

  recupUser() {
    this.userService.getUsers().subscribe(users => this.users = users.json())
  }

}
