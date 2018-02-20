/**
 * Component for Managing login
 */
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {LoginService} from "../login.service";
import {Router} from '@angular/router';

/**
 * Class for logged in user
 */
class Signup {
    constructor(
                public email:string = '',
                public password:string = '',
                ) {
    }
   getUser(){
        return this.email;
   }
}
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * Handles form submission
 */
export class LoginComponent implements OnInit {
private loginFlag:boolean=false;
    model: Signup = new Signup();
    @ViewChild('f') form: any;
    onSubmit() {
        if (this.form.valid) {
            //console.log("Form Submitted!");
            //console.log(this.model.email);
            if((this.model.email === "admin@admin.com") && this.model.password === "admin"){
                this.user.setUserLoggedIn();
                this.router.navigate(['/dashboard'])
            }else{
                alert("Login Failed")
            }
            this.form.reset();
        }

    }

    /**
     * Makes use of Login service
     * @param {LoginService} user
     * @param {Router} router
     */
  constructor(private user:LoginService, private router:Router) { }


  ngOnInit() {
  }

}
