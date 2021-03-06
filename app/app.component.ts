import { Component, OnInit } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {HomeComponent} from './home.component'
import {NavBarComponent} from '../shared/navbar.component.js'
import {PostsComponent} from '../post/posts.component.js'
import {NotFoundComponent} from '../shared/notfound.component.js'
import {UsersComponent} from '../user/users.component.js'
import {UserFormComponent} from '../user/userform.component.js'


@RouteConfig([
{ path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
{ path: '/users', name: 'Users', component: UsersComponent },
{ path: '/user/:id', name: 'User', component: UserFormComponent},
{ path: '/users/new', name: 'NewUser', component: UserFormComponent },
{ path: '/posts', name: 'Posts', component: PostsComponent },
{ path: '/*other', name: 'Other', redirectTo: ['Home'] },
{ path: '/user/*other', name: 'UserOther', redirectTo: ['NotFound'] },
{ path: '/not-found', name: 'NotFound', component: NotFoundComponent }
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