import { NgModule } from '@angular/core';

import { Home1Component } from './home1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Home1Component
  ],
  imports: [
    RouterModule.forChild([{
      path:'', component:Home1Component},
    ]),
  ],

  bootstrap: [Home1Component],
  exports:[]
})
export class LazyModule { }
