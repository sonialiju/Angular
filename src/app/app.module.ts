import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import {AuthguardGuard} from "./authguard.guard";


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from "./login.service";
import {ArticlesService} from "./articles.service";
import { AddarticleComponent } from './addarticle/addarticle.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AddarticleComponent,
    SingleArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      RouterModule.forRoot([
          {
              path:'',
              component:LoginComponent
          },
          {
              path:'dashboard',
              canActivate:[AuthguardGuard],
              component: DashboardComponent
          },
          {
              path:'addarticle',
              component: AddarticleComponent
          },
          {
              path:'dashboard/articleview/:id',
              component: SingleArticleComponent
          },
          {
              path:'dashboard/editarticle/:id',
              component: EditArticleComponent
          },
      ])

  ],
  providers: [LoginService,ArticlesService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
