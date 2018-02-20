import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "../articles.service";
import { ViewChild } from '@angular/core';
import {Article} from "../article";

// class Article {
//     constructor(
//         public title:string = '',
//         public body:string = '',
//     ) {
//     }
//
// }

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
    private successFlag:boolean=false;
    model: Article = new Article();
    @ViewChild('f') form: any;
    constructor(private route:ActivatedRoute,private article:ArticlesService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(
            params=>{
                let id = params.get('id');
                this.doVIEW(id);
                console.log(this.model.title);

            }
        );
    }
    doVIEW(id){
        console.log("GET");

        this.article.viewArticle(id)
            .then(()=>this.successFlag = true)
            .catch(()=>msg => console.error(`Error: ${msg.status} ${msg.statusText}`))
        ;
        //this.model = this.article;
        console.log(this.article.singleItem);

    }


}
