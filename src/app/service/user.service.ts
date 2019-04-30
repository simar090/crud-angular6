import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import { of } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';

  getUsers() {
    let fakeUsers = [{id: 1, firstName: 'Ron', lastName: 'Ray', gender: 'Male', dob: '01/11/1991', dept:'IT'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', gender: 'Male', dob: '01/11/1991', dept:'HR'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', gender: 'Male', dob: '01/11/1991', dept:'Admin'},
     {id: 1, firstName: 'praks', lastName: 'pb', gender: 'Male', dob: '01/11/1991', dept:'Finaance'},
   ];
   return of(fakeUsers);
    //return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
