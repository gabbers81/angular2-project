System.register(['angular2/core', 'angular2/router', '../shared/navbar.component.js', '../shared/pagination.component.js', './post.js', './posts.service.js', './postsummary.pipe.js', '../shared/spinner.component.js', '../user/users.service.js'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_js_1, pagination_component_js_1, post_js_1, posts_service_js_1, postsummary_pipe_js_1, spinner_component_js_1, users_service_js_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_js_1_1) {
                navbar_component_js_1 = navbar_component_js_1_1;
            },
            function (pagination_component_js_1_1) {
                pagination_component_js_1 = pagination_component_js_1_1;
            },
            function (post_js_1_1) {
                post_js_1 = post_js_1_1;
            },
            function (posts_service_js_1_1) {
                posts_service_js_1 = posts_service_js_1_1;
            },
            function (postsummary_pipe_js_1_1) {
                postsummary_pipe_js_1 = postsummary_pipe_js_1_1;
            },
            function (spinner_component_js_1_1) {
                spinner_component_js_1 = spinner_component_js_1_1;
            },
            function (users_service_js_1_1) {
                users_service_js_1 = users_service_js_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.active = false;
                    this.clickedPost = new post_js_1.Post();
                    this.commentsLoading = true;
                    this.isPost = false;
                    this.posts = [];
                    this.pagedPosts = [];
                    this.pageSize = 10;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadPosts();
                    this.loadUsers();
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._usersService.getUsers()
                        .subscribe(function (res) { return _this.users = res; });
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.postLoading = true;
                    this._postsService.getPosts(filter)
                        .subscribe(function (res) {
                        _this.posts = res;
                        _this.pagedPosts = _.take(_this.posts, _this.pageSize);
                    }, function (err) { return alert(err); }, function () { return _this.postLoading = false; });
                };
                PostsComponent.prototype.filterPosts = function (filter) {
                    this.isPost = null;
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.onClick = function (post) {
                    var _this = this;
                    this.clickedPost = post;
                    this.active = !this.active;
                    this.isPost = true;
                    this.commentsLoading = true;
                    this._postsService.getComments(post.id)
                        .subscribe(function (res) { return _this.comments = res; }, null, function () { return _this.commentsLoading = false; });
                };
                PostsComponent.prototype.onPageChange = function (page) {
                    var startIndex = this.pageSize * (page - 1);
                    this.isPost = false;
                    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: "post/posts.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES, navbar_component_js_1.NavBarComponent, spinner_component_js_1.SpinnerComponent, pagination_component_js_1.PaginationComponent],
                        providers: [posts_service_js_1.PostsService, users_service_js_1.UsersService],
                        pipes: [postsummary_pipe_js_1.PostSummaryPipe],
                        styles: ["\n        .posts li\t{\tcursor:\tdefault;\t}\n        .posts li:hover\t{\tbackground:\t#ecf0f1;\t}\t\n        .list-group-item.active,\t\n        .list-group-item.active:hover,\t\n        .list-group-item.active:focus\t{\t\n\t        background-color:\t#ecf0f1;\n\t        border-color:\t#ecf0f1;\t\n            color:\t#2c3e50;\n        }\n        .round-border-img {\n            border-radius: 60%;\n            margin: 10px;\n        }\n    \n    "]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof posts_service_js_1.PostsService !== 'undefined' && posts_service_js_1.PostsService) === 'function' && _a) || Object, (typeof (_b = typeof users_service_js_1.UsersService !== 'undefined' && users_service_js_1.UsersService) === 'function' && _b) || Object])
                ], PostsComponent);
                return PostsComponent;
                var _a, _b;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map