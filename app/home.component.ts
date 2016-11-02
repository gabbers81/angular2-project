import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NavBarComponent} from '../shared/navbar.component.js'

@Component({
    selector: 'home',
    templateUrl: "app/home.component.html",
    directives: [ROUTER_DIRECTIVES, NavBarComponent]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}