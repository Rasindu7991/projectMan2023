import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-list/models/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { 
    // this.baseUrl='https://localhost:7105';
  }

  getAllUsers() : Observable<User[]>{
   return this.http.get<User[]>(this.baseUrl+'/api/users');
  }
  
  addUsers(user : User) : Observable<User>{
    user.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<User>(this.baseUrl+'/api/users',user);
  }

  getUserById(id : string) : Observable<User>{
    return this.http.get<User>(this.baseUrl+'/api/users/'+id);
  }

  updateUser(id : string, updateUserRequest: User): Observable<User>{
    return this.http.put<User>(this.baseUrl+'/api/users/'+id, updateUserRequest);
  }

  deleteUser(id : string): Observable<User>{
    return this.http.delete<User>(this.baseUrl+'/api/users/'+id);
  }

  
}