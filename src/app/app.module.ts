import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ParamComponent } from './param/login1.component';
import { LazyModule } from './module/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path:'home', component:HomeComponent},
      {path:'login', component:LoginComponent},
      {path:'param/:id', component: ParamComponent},
      {path: 'home1' , loadChildren : ()=>  import('./module/lazy.module').then ((module)=> module.LazyModule)}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
