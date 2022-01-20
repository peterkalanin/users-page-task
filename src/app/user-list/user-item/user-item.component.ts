import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-item',
    templateUrl: 'user-item.component.html',
    host: {
        'class': "user-item"
    }
})

export class UserItemComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}