System.register(['angular2/core', 'angular2/router', './navbar.component', './post', './posts.service', './postsummary.pipe', './spinner.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, navbar_component_1, post_1, posts_service_1, postsummary_pipe_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (postsummary_pipe_1_1) {
                postsummary_pipe_1 = postsummary_pipe_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(postsService) {
                    this.postsService = postsService;
                    this.isLoading = true;
                    this.clickedPost = new post_1.Post();
                    this.isPost = false;
                    this.active = false;
                    this.commentsLoaded = true;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.postsService.getPosts()
                        .subscribe(function (res) {
                        _this.posts = res;
                    }, function (err) { return alert(err); }, function () { return _this.isLoading = false; });
                };
                PostsComponent.prototype.onClick = function (post) {
                    var _this = this;
                    this.clickedPost = post;
                    this.active = !this.active;
                    this.isPost = true;
                    this.commentsLoaded = true;
                    this.postsService.getComments(post.id)
                        .subscribe(function (res) { return _this.comments = res; }, null, function () { return _this.commentsLoaded = false; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: "app/posts.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavBarComponent, spinner_component_1.SpinnerComponent],
                        providers: [posts_service_1.PostsService],
                        pipes: [postsummary_pipe_1.PostSummaryPipe],
                        styles: ["\n        .posts li\t{\tcursor:\tdefault;\t}\n        .posts li:hover\t{\tbackground:\t#ecf0f1;\t}\t\n        .list-group-item.active,\t\n        .list-group-item.active:hover,\t\n        .list-group-item.active:focus\t{\t\n\t        background-color:\t#ecf0f1;\n\t        border-color:\t#ecf0f1;\t\n            color:\t#2c3e50;\n        }\n        .round-border-img {\n            border-radius: 60%;\n            margin: 10px;\n        }\n    \n    "]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map