import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from 'angular2/core';

@Component({
    selector: 'pagination',
    templateUrl: 'app/pagination.component.html'
})
export class PaginationComponent implements OnChanges {

    @Input() items = [];
    @Input() pageSize = 10;
    @Output() pageChanged = new EventEmitter();
    pages: any [];
    currentPage: number;

    ngOnChanges() {

        this.currentPage = 1;

        var pageCount = this.items.length / this.pageSize;
        this.pages = [];
        for (var i=1; i <= pageCount; i++)
            this.pages.push(i);

    }

    onPageChange(page) {

        this.currentPage = page;
        this.pageChanged.emit(this.currentPage);

    }

    next() {

        if (this.currentPage == this.pageSize)
            return;

        this.currentPage++
        this.pageChanged.emit(this.currentPage);
    }

    previous() {

        if (this.currentPage == 1)
            return;

        this.currentPage--
        this.pageChanged.emit(this.currentPage);
    }

}