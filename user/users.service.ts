import { Http, Response, HTTP_PROVIDERS } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {

    userUrl = "https://jsonplaceholder.typicode.com/users/";

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

    currentUser(id) {
        return this._http.get(this.userUrl + id)
            .map(users => users.json())
    }

    updateUser(id, user) {
        return this._http.put(this.userUrl + id, JSON.stringify(user))
            .map(res => res.json());
    }

    deleteUser(id) {
        return this._http.delete(this.userUrl+id)
            .map(res => res.json)
    }

}