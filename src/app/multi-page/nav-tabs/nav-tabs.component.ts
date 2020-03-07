import { Component, OnInit, Input } from '@angular/core';
import { Page, getCurrentPage } from '../page.directive';

@Component({
  selector: 'nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css', '../../bootstrap.css']
})
export class NavTabsComponent {

  @Input() pages: Page;
  @Input() dropdown: boolean = false;

  getCurrentPage = getCurrentPage;
}
