/**
 * Component for user dashboard
 */
import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../articles.service";
import {LoginService} from "../login.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
    private loading:boolean=false;
    private deleteFlag:boolean=false;

    /**
     *
     * @param {ArticlesService} articles
     * @param {LoginService} user
     */
    constructor(private articles:ArticlesService,private user:LoginService ) {

        this.loading = true;
        this.articles.listAll().then(()=>this.loading = false);
    }

    /**
     * delete Article
     * @param id
     */
    doDELETE(id) {
        // console.log("DELETE");
        // console.log(id);

        this.articles.deleteArticle(id)
            .then(()=>{
            this.deleteFlag = true;
            alert("Article has been deleted");
            console.log(this.deleteFlag);})
            .catch(()=>msg => console.error(`Error: ${msg.status} ${msg.statusText}`));

        ;
    }


    ngOnInit() {
    }

}
