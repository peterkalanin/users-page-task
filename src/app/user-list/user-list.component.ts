import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService
      .users$
      .subscribe((users) => {
        this.users = users as User[];
      })
  }

}
