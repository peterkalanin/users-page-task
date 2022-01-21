import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  loading: boolean = true;
  page!: number;
  delay!: number;
  pageLimit!: number;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((query) => {
      this.delay = +query.delay;
      this.page = +query.page || 1;
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.userService
      .getUsers(this.page, this.delay)
      .subscribe((req) => {
        this.users = req.data as User[];
        this.pageLimit = req.total_pages;
        this.loading = false;
      });
  }

  onPageSelection(page: number) {
    this.page = page;
    this.getUsers();

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: {
          page: this.page,
          delay: this.delay
        },
        queryParamsHandling: 'merge'
      });
  }

}
