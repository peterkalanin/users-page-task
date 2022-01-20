import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  loading: boolean = true;
  page: string = '1';
  delay!: string;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((query) => {
      this.delay = query.delay;
      this.page = query.page;
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.userService
      .getUsers(this.page, this.delay)
      .pipe(map(req => req.data))
      .subscribe((users) => {
        this.users = users as User[];
        this.loading = false;
      });
  }

}
