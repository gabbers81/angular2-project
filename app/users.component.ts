import { Component, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/observable';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import 'rxjs/add/operator/map'

import { NavBarComponent } from './navbar.component';
import { UsersService } from './users.service';


@Component({
    selector: 'users',
    templateUrl: "app/users.component.html",
    directives: [ROUTER_DIRECTIVES, NavBarComponent],
    providers: [UsersService]
})
export class UsersComponent implements OnInit {

    users = [];

    constructor(private _usersservice: UsersService) {

    }

    ngOnInit() {
        this._usersservice.getUsers()
            .subscribe(res => this.users = res)
    }

}