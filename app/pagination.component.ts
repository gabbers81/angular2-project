import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from 'angular2/core';

@Component({
    selector: 'pagination',
    templateUrl: 'app/pagination.component.html'
})
export class PaginationComponent implements OnChanges {

    @Input() items = [];
    @Input() pageSize = 10;
    @Output() pageChanged = new EventEmitter();
    pages = [];
    currentPage: number;

    ngOnChanges() {

        this.currentPage = 1;

        var pageCount = Math.ceil(this.items.length / this.pageSize);
        this.pages = [];
        for (var i; i <= pageCount; i++)
            this.pages.push(i);

    }

    onChange(page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    }

    previous() {
        if (this.currentPage == 1)
            return

        this.currentPage--
        this.pageChanged.emit(this.currentPage)
    }

    next() {
        if (this.currentPage == this.pages.length)
            return

        this.currentPage++
        this.pageChanged.emit(this.currentPage)

    }

}