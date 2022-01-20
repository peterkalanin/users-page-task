import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'app-user-item',
    templateUrl: 'user-item.component.html',
    host: {
        'class': "user-item",
        '(click)': 'onClick($event)'
    }
})

export class UserItemComponent implements OnInit {
    @Input() user!: User;

    constructor(private router: Router,) { }

    ngOnInit() { }

    onClick() {
        this.router.navigate(['/user', this.user.id]);
    }
}