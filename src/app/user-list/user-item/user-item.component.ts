import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'app-user-item',
    templateUrl: 'user-item.component.html',
    host: {
        'class': "user-item"
    }
})

export class UserItemComponent implements OnInit {
    @Input() user!: User;

    constructor() { }

    ngOnInit() { }
}