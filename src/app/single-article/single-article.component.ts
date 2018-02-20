/**
 * Component fro showing single article
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "../articles.service"

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit
{
    private successFlag:boolean=false;
    /**
     * Initializing to use articleService
     * @param {ActivatedRoute} route
     * @param {ArticlesService} article
     */
    constructor(private route:ActivatedRoute,private article:ArticlesService) { }
     ngOnInit() {
      this.route.paramMap.subscribe(
          params=>{
              let id = params.get('id');
              this.doVIEW(id);
          }
      );
    }

    /**
     * Method to view the article passing given id
     * @param id
     */
    doVIEW(id){
        console.log("GET");
        this.article.viewArticle(id)
            .then(()=>this.successFlag = true)
            .catch(()=>msg => console.error(`Error: ${msg.status} ${msg.statusText}`))
        ;
    }

}
