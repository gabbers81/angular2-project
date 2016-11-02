System.register(['angular2/core', 'angular2/common', 'angular2/router', '../shared/email-validator.js', './user.js', './users.service.js'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, email_validator_js_1, user_js_1, users_service_js_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (email_validator_js_1_1) {
                email_validator_js_1 = email_validator_js_1_1;
            },
            function (user_js_1_1) {
                user_js_1 = user_js_1_1;
            },
            function (users_service_js_1_1) {
                users_service_js_1 = users_service_js_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(fb, _usersservice, _routerParams, _router) {
                    this._usersservice = _usersservice;
                    this._routerParams = _routerParams;
                    this._router = _router;
                    this.user = new user_js_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                email_validator_js_1.EmailValidator.validateIsEmail
                            ])],
                        phone: [''],
                        address: fb.group({
                            street: [''],
                            apt: [''],
                            city: [''],
                            zipcode: ['']
                        })
                    });
                }
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userId = this._routerParams.get("id");
                    this.title = this.userId ? "Edit User" : "New User";
                    if (!this.userId)
                        return;
                    this._usersservice.currentUser(this.userId)
                        .subscribe(function (users) { return _this.user = users; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                UserFormComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.form.dirty)
                        return confirm("Do you want to leave the new user form?");
                };
                UserFormComponent.prototype.saveUser = function (form) {
                    var _this = this;
                    var result;
                    if (!this.userId) {
                        result = this._usersservice.createUser(this.form.value);
                    }
                    else {
                        result = this._usersservice.updateUser(this.userId, this.form.value);
                    }
                    result.subscribe(function (res) {
                        _this._router.navigate(['Users']);
                    });
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        selector: 'new-user',
                        templateUrl: 'user/userform.component.html',
                        providers: [users_service_js_1.UsersService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, (typeof (_a = typeof users_service_js_1.UsersService !== 'undefined' && users_service_js_1.UsersService) === 'function' && _a) || Object, router_1.RouteParams, router_1.Router])
                ], UserFormComponent);
                return UserFormComponent;
                var _a;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=userform.component.js.map