import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagination } from '../models/pagination.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: 'user-detail.component.html'
})

export class UserDetailComponent implements OnInit {
    user?: User;
    pagination: Pagination = {};

    constructor(private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) {
        this.route.params.subscribe(params => {
            const id = params.id;

            this.userService.users$.subscribe(users => {
                if (!users) { return }

                this.user = users.find((u) => u.id == id) as User;
                this.pagination = userService.pagination;
            })
        });
    }

    ngOnInit() { }
}