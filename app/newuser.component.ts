import { Component, OnInit } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators, Control } from 'angular2/common';
import { EmailValidator } from './email-validator'
import { Router, CanDeactivate, ROUTER_DIRECTIVES } from 'angular2/router'
import { UsersService } from './users.service'

@Component({
    selector: 'new-user',
    templateUrl: 'app/newuser.component.html',
    providers: [UsersService],
    directives: [ROUTER_DIRECTIVES]
})
export class NewUserComponent implements OnInit, CanDeactivate {

    form: ControlGroup;

    constructor(fb: FormBuilder, private _usersservice: UsersService) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                EmailValidator.validateIsEmail
            ])]
        })
    }

    ngOnInit() {

    }

    routerCanDeactivate(next, previous) {
        if (this.form.dirty)
            confirm("Do you want to leave the new user form?")
    }

    saveUser(form) {
        this._usersservice.createUser(this.form.value).subscribe(res => console.log(res))
        console.log(this.form.value)
    }

}