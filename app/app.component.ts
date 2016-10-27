import { Component, OnInit } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {HomeComponent} from './home.component'
import {NavBarComponent} from './navbar.component'
import {PostsComponent} from './posts.component'
import {UsersComponent} from './users.component'
import {NewUserComponent} from './newuser.component'


@RouteConfig([
{ path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
{ path: '/users', name: 'Users', component: UsersComponent },
{ path: '/users/new', name: 'NewUser', component: NewUserComponent },
{ path: '/posts', name: 'Posts', component: PostsComponent },
{ path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  directives: [NavBarComponent, ROUTER_DIRECTIVES], 
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() { 

  }

}