import { Component, OnInit } from '@angular/core';
import { User } from '../../user-list/models/user.model';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
addUserRequest : User = {
  id : '',
  name : '',
  email: '',
  contactNo :'',
  department: 0,
  unit:0
};

  constructor(private userService: UsersService, private router:Router){}
  ngOnInit(): void {
  }

  addUsers(){
    this.userService.addUsers(this.addUserRequest).subscribe({
      next: (user) =>{
        this.router.navigate(['users']);
      }
    });
  }

}
