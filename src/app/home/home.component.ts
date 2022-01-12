import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template:`<h2>Home Component</h2>
  <login (oc)="play($event)"></login>
  `,
})
export class HomeComponent {
  title = 'test1';

  play($event: any): void{
      alert($event);
  }
}
