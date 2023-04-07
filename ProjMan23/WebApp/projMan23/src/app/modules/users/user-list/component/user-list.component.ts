import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
users : User[] = [];

constructor(private userService : UsersService){}

ngOnInit(): void {
  this.userService.getAllUsers().subscribe({
    next : (users) =>{
      this.users = users;
    },
    error : (response) => {
      console.log(response);
    }
  })
}

}
