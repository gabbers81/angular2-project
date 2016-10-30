import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { NavBarComponent } from './navbar.component';
import { Post } from './post'
import { PostsService } from './posts.service';
import { PostSummaryPipe } from './postsummary.pipe';
import { SpinnerComponent } from './spinner.component'

@Component({
    selector: 'posts',
    templateUrl: "app/posts.component.html",
    directives: [ROUTER_DIRECTIVES, NavBarComponent, SpinnerComponent],
    providers: [PostsService],
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

    posts: any[];
    postLoading = true;
    clickedPost = new Post();
    isPost = false;
    active = false;
    comments: any[];
    commentsLoading = true;

    constructor(private postsService: PostsService) { }

    ngOnInit() {

        this.postsService.getPosts()
            .subscribe(res => {
                this.posts = res;
            },
            err => alert(err),
            () => this.postLoading = false
            );

    }

    onClick(post) {
        this.clickedPost = post;
        this.active = !this.active;
        this.isPost = true;
        this.commentsLoading = true;
        

        this.postsService.getComments(post.id)
            .subscribe(res => this.comments = res,
            null,
            () => this.commentsLoading = false
           );

    }

}