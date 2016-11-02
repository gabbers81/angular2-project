System.register(['angular2/core', 'angular2/router', './home.component', '../shared/navbar.component.js', '../post/posts.component.js', '../shared/notfound.component.js', '../user/users.component.js', '../user/userform.component.js'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, navbar_component_js_1, posts_component_js_1, notfound_component_js_1, users_component_js_1, userform_component_js_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (navbar_component_js_1_1) {
                navbar_component_js_1 = navbar_component_js_1_1;
            },
            function (posts_component_js_1_1) {
                posts_component_js_1 = posts_component_js_1_1;
            },
            function (notfound_component_js_1_1) {
                notfound_component_js_1 = notfound_component_js_1_1;
            },
            function (users_component_js_1_1) {
                users_component_js_1 = users_component_js_1_1;
            },
            function (userform_component_js_1_1) {
                userform_component_js_1 = userform_component_js_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/users', name: 'Users', component: users_component_js_1.UsersComponent },
                        { path: '/user/:id', name: 'User', component: userform_component_js_1.UserFormComponent },
                        { path: '/users/new', name: 'NewUser', component: userform_component_js_1.UserFormComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_js_1.PostsComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] },
                        { path: '/user/*other', name: 'UserOther', redirectTo: ['NotFound'] },
                        { path: '/not-found', name: 'NotFound', component: notfound_component_js_1.NotFoundComponent }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/app.component.html",
                        directives: [navbar_component_js_1.NavBarComponent, router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map