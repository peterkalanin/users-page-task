import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
    selector: 'app-user-detail',
    templateUrl: 'user-detail.component.html'
})

export class UserDetailComponent implements OnInit {
    user!: User;

    constructor() { }

    ngOnInit() { }
}