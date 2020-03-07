import { Component, Input, OnInit } from '@angular/core';
import { Page, getCurrentPage } from '../page.directive';

@Component({
  selector: 'nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.css', '../../bootstrap.css'],
})
export class NavDropdownComponent {

  @Input() pages: Page[];

  getCurrentPage = getCurrentPage;
}