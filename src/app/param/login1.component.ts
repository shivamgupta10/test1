import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'param1',
  template:`<h2>Param Component {{title}}</h2>`,
})
export class ParamComponent {
  title = 'test1';

  constructor( private h1: HttpClient, private r1: ActivatedRoute){
    console.log(h1);
    alert(this.r1.snapshot.params.id);

    // h1.get("api/products/test.json").subscribe(data=>{
    //   alert("hello");
    //   console.log(data)});


  }



}
