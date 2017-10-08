import { UserService } from './../../services/user.service';
import { User } from './../../model/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser: User;
  userList: User[];

  constructor(public _userService: UserService) { }

  ngOnInit() {
    this.userList = this._userService.getUsers();
    console.log(this.userList);
  }

  getUserDetails(user:User){
    this.currentUser = user;
  }

}
