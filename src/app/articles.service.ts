/**
 * Service for managing all the article related functions
 */
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import {Article} from "./article";
import {URLSearchParams} from '@angular/http';
class ArticleItem {
    constructor(
        public id: number,
        public title: string,
        public body: string,
    ) {
    }
}

@Injectable()
export class ArticlesService {

    constructor(private http:Http) {
        this.results = [];

    }
    currentArticle:Article;
    // apiRoot:string = 'http://127.0.0.1:8000/api/articles';
    apiRoot:string = 'https://jsonplaceholder.typicode.com/';
    //results:Object[];
    results:ArticleItem[];
    singleItem = ArticleItem;

    loading:boolean;

    /**
     * Listing all articles
     * @returns {Promise<any>}
     */
    listAll()
    {
        let promise = new Promise((resolve, reject) => {
            let apiURL = `${this.apiRoot}posts`;
            let search = new URLSearchParams();
            search.set('limit', '5');
            this.http.get(apiURL,{search: search})
                .toPromise()
                .then(
                    res => { // Success
                        // this.results = res.json().results;
                        // console.log(this.results);
                        this.results = res.json().map(item => {
                            return new ArticleItem(
                                item.id,
                                item.title,
                                item.body,
                            );
                        });
                        resolve();
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
        });
        return promise;
    }

    /**
     * Add Article
     * @param title
     * @param body
     * @returns {Promise<any>}
     */
    addArticle(title,body)
    {
        let promise = new Promise((resolve, reject) => {
            let apiURL = `${this.apiRoot}posts`;
            this.http.post(apiURL,{title:title,body:body})
                .toPromise()
                .then(
                    res => { // Success
                        this.results = res.json().results;

                        console.log(this.results);

                        resolve();
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
        });
        return promise;
    }

    /**
     * Delete Article
     * @param id
     * @returns {Promise<any>}
     */
    deleteArticle(id)
    {
        let promise = new Promise((resolve, reject) => {
            let apiURL = `${this.apiRoot}posts/${id}`;

            this.http.delete(apiURL)
                .toPromise()
                .then(
                    response => { // Success
                        console.log(response.json());

                        resolve();
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
        });
        return promise;

    }

    /**
     * View Article
     * @param id
     * @returns {Promise<any>}
     */
    viewArticle(id){
       // console.log(id);
        let promise = new Promise((resolve, reject) => {
            let apiURL = `${this.apiRoot}posts/${id}`;
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => { // Success
                        this.singleItem = res.json();
                        this.currentArticle=res.json();
                       // console.log( this.singleItem );

                        resolve();
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
        });
        return promise;
    }



}
