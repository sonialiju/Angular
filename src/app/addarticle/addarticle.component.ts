/**
 * Component for create article
 */
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {ArticlesService} from "../articles.service"
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import {URLSearchParams} from '@angular/http';

/**
 * Article class
 */
class Article
{
    constructor(
        public title:string = '',
        public body:string = '',
    ) {
    }

}
@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
/**
 * Method for calling addArticle service
 */
export class AddarticleComponent implements OnInit
{
    private addFlag:boolean=false;

    model: Article = new Article();
    @ViewChild('f') form: any;

    onSubmit() {
        if (this.form.valid) {
            console.log("Form Submitted!");
            console.log(this.model.title);
            this.article.addArticle(this.model.title,this.model.body)
                .then(()=>{this.addFlag = true;alert("Article has been created")})
                .catch(()=>msg => console.error(`Error: ${msg.status} ${msg.statusText}`))
                  .then(()=>this.addFlag=false);
            ;
            this.form.reset();
        }

    }

    /**
     *
     * @param {ArticlesService} article
     */
    constructor(private  article:ArticlesService) { }

  ngOnInit() {
  }

}
