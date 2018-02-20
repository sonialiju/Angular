/**
 * Service for manage login
 */
import { Injectable } from '@angular/core';
import {  Response, RequestOptions, Headers, HttpModule,Http } from '@angular/http';

class SearchItem {
    constructor(
        public id: number,
        public name: string,
    ) {
    }
}


@Injectable()
export class LoginService {

    apiRoot:string = 'http://127.0.0.1:8000/api/login';

    results:Object[];
    loginFlag:boolean;
    singleItem = SearchItem;
    private isUserLoggedIn;
    private username;

    /**
     *
     * @param {Http} http
     */
    constructor(private http:Http) {
        this.results = [];
        this.isUserLoggedIn = false;
    }

    /**
     * Set the user as logged in
     */
    setUserLoggedIn(){
        this.isUserLoggedIn = true;
    }

    /**
     * get current login status
     * @returns {any}
     */
    getUserLoggedIn(){
        return this.isUserLoggedIn;
    }

}
