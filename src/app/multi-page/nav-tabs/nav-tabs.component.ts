import { Component, Input } from '@angular/core';
import { Page } from '../page.directive';

@Component({
  selector: 'nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css', '../../bootstrap.css']
})
export class NavTabsComponent {

  @Input() pages: Page;
  @Input() dropdown: boolean = false;
}
