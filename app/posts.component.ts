import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NavBarComponent} from './navbar.component'

@Component({
    selector: 'posts',
    templateUrl: "app/posts.component.html",
    directives: [ROUTER_DIRECTIVES, NavBarComponent]
})
export class PostsComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}