import { Http, Response, HTTP_PROVIDERS } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {

    userUrl = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {

    }

    userStream = this._http.get(this.userUrl);

    getUsers() {

        return this.userStream.map(users => users.json())

    }

    createUser(userInfo) {
        return this._http.post(this.userUrl, JSON.stringify(userInfo))
            .map(x => x.json())
    }
}