import { Http, Response, HTTP_PROVIDERS } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'

@Injectable()
export class PostsService {

    postsUrl = "https://jsonplaceholder.typicode.com/posts/"

    constructor(private _http: Http) { }

    getPosts() {
        return this._http.get(this.postsUrl)
            .map(res => res.json())
    }

}