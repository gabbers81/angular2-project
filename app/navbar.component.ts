import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'

@Component({
    selector: 'navbar',
    templateUrl: "app/navbar.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent implements OnInit {

    constructor(private _router: Router) {

     }

     isCurrentRoute(route){
         var currentRoute = this._router.generate(route);
         return this._router.isRouteActive(currentRoute);
     }

    ngOnInit() {

    }

}