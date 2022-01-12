import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { LoginService } from './test.service';


@Component({
  selector: 'login',
  template:`<h2>Login Component</h2>
  <button (click)="toggle()"> Toggle</button>
  `,
})
export class LoginComponent implements OnInit {
  title = 'test1';
  @Output() oc = new EventEmitter();
  constructor( private h1: HttpClient, t1: LoginService){
    console.log(h1);
    alert(t1.test);

    // h1.get("api/products/test.json").subscribe(data=>{
    //   alert("hello");
    //   console.log(data)});


  }


  ngOnInit(): void {
    this.h1.get<any>("api/products/products.json").subscribe(data=>{
      //alert("hello");
      console.log(data)});
    }

  toggle(){
    this.oc.emit("hello123")
  }
}
