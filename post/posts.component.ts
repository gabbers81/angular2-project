import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { NavBarComponent } from '../shared/navbar.component';
import { PaginationComponent } from '../shared/pagination.component'
import { Post } from './post/post'
import { PostsService } from './posts/posts.service';
import { PostSummaryPipe } from './postsummary.pipe';
import { SpinnerComponent } from '../shared/spinner.component';
import { UsersService } from '../user/users.service';

@Component({
    selector: 'posts',
    templateUrl: "app/posts.component.html",
    directives: [ROUTER_DIRECTIVES, NavBarComponent, SpinnerComponent, PaginationComponent],
    providers: [PostsService, UsersService],
    pipes: [PostSummaryPipe],
    styles: [`
        .posts li	{	cursor:	default;	}
        .posts li:hover	{	background:	#ecf0f1;	}	
        .list-group-item.active,	
        .list-group-item.active:hover,	
        .list-group-item.active:focus	{	
	        background-color:	#ecf0f1;
	        border-color:	#ecf0f1;	
            color:	#2c3e50;
        }
        .round-border-img {
            border-radius: 60%;
            margin: 10px;
        }
    
    `]
})
export class PostsComponent implements OnInit {

    active = false;
    clickedPost = new Post();
    comments: any[];
    commentsLoading = true;
    isPost = false;
    posts = [];
    postLoading;
    users: any[];
    pagedPosts = [];
    pageSize = 10;


    constructor(private _postsService: PostsService, private _usersService: UsersService) { }

    ngOnInit() {

        this.loadPosts();
        this.loadUsers();

    }

    private loadUsers() {

        this._usersService.getUsers()
            .subscribe(res => this.users = res)
    }

    private loadPosts(filter?) {

        this.postLoading = true;

        this._postsService.getPosts(filter)
            .subscribe(res => {
                this.posts = res;
                this.pagedPosts = _.take(this.posts, this.pageSize);
            },
            err => alert(err),
            () => this.postLoading = false
            );

    }

    filterPosts(filter) {

        this.isPost = null;
        this.loadPosts(filter);

    }

    onClick(post) {
        this.clickedPost = post;
        this.active = !this.active;
        this.isPost = true;
        this.commentsLoading = true;

        this._postsService.getComments(post.id)
            .subscribe(res => this.comments = res,
            null,
            () => this.commentsLoading = false
            );

    }

    onPageChange(page) {
        var startIndex = this.pageSize * (page - 1);
        this.isPost = false;
        this.pagedPosts = _.take(_.rest(this.posts,startIndex),this.pageSize);

    }

}