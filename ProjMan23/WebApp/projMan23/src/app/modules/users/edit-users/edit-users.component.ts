import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../user-list/models/user.model';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  userDetails : User = {
    id : '',
    name : '',
    email: '',
    contactNo :'',
    department: 0,
    unit:0
  };
  constructor(private router: Router,private userService: UsersService, private route: ActivatedRoute){
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) =>{
          const id= params.get('id');
          if(id){
              this.userService.getUserById(id).subscribe({
                next: (response)=>{
                    this.userDetails = response;
                }
              });
          }
        }
      });
  }

  editUser(){
    this.userService.updateUser(this.userDetails.id, this.userDetails).subscribe(
      {
        next: (response)=>{
          this.router.navigate(['users']);
        }
      }
    );

  }

  deleteUser(id : string){
    this.userService.deleteUser(id).subscribe(
      {
        next: (response)=>{
          this.router.navigate(['users']);
        }
      }
    )
  }

}
