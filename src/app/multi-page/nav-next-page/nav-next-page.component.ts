import { Component, OnInit, Input } from '@angular/core';
import { Page, getCurrentPage } from '../page.directive';

@Component({
  selector: 'nav-next-page',
  templateUrl: './nav-next-page.component.html',
  styleUrls: ['./nav-next-page.component.css', '../../bootstrap.css']
})
export class NavNextPageComponent implements OnInit {

  @Input() pages: Page[];

  getCurrentPage = getCurrentPage;

nextPage(): Page {
    const currentPage = this.getCurrentPage();
    if (currentPage) {
      const index = currentPage.num;
      if (index >= 0 && index < this.pages.length){
        return this.pages[index];
      } 
      return null;
    }
  }

  go(page: Page){
    page.goTo();
    page.scrollIntoView();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
