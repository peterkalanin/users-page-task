import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .pipe(map(resp => resp.data))
      .subscribe((users) => {
        this.users = users;
      })
  }

}
