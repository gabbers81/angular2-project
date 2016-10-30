import { Component, OnInit, Input } from 'angular2/core';

@Component({
    selector: 'spinner',
    template: `
        <i *ngIf="isVisible" class="fa fa-spinner fa-spin fa-4x"></i>   
    `,
})
export class SpinnerComponent {
    @Input() isVisible = true;
}