import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pagination-component',
    templateUrl: 'pagination.component.html'
})

export class PaginationComponent implements OnInit {
    page!: number;

    @Input() pageLimit!: number;
    @Output() pageSelected: EventEmitter<number> = new EventEmitter<number>();

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe((query) => {
            this.page = +query.page || 1;
        });
    }

    ngOnInit() { }

    selectPrevious() {
        if (this.page <= 1) {
            return;
        }
        this.page -= 1;
        this.pageSelected.emit(this.page);
    }

    selectNext() {
        if (this.page >= this.pageLimit) {
            return;
        }
        this.page += 1;
        this.pageSelected.emit(this.page);
    }
}