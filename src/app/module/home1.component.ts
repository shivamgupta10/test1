import { ChangeDetectionStrategy, Component , ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'home1',
  template:`<h2>Home Component Lazy</h2>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home1Component {
  title = 'test1';
}
