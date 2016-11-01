import { Component, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/observable';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import 'rxjs/add/operator/map'

import { NavBarComponent } from '../shared/navbar.component';
import { UsersService } from './users.service';


@Component({
    selector: 'users',
    templateUrl: "app/users.component.html",
    directives: [ROUTER_DIRECTIVES, NavBarComponent],
    providers: [UsersService]
})
export class UsersComponent implements OnInit {

    users: any[];

    constructor(private _usersservice: UsersService) {

    }

    ngOnInit() {
        this._usersservice.getUsers()
            .subscribe(res => this.users = res)
    }

    deleteUser(user, event) {
        if (confirm("You are about to delete the user " + user.name + ", are you sure?")) {
            event.path[2].hidden = true;
            this._usersservice.deleteUser(user.id)
                .subscribe(null,
                err => {
                    alert("Could not delete user")
                    event.path[2].hidden = false;
                });
        }
    }

}