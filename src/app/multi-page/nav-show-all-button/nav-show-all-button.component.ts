import { Component, Input } from '@angular/core';
import MultiPage from '../multi-page';

@Component({
  selector: 'nav-show-all-button',
  templateUrl: './nav-show-all-button.component.html',
  styleUrls: ['./nav-show-all-button.component.css', '../../bootstrap.css']
})
export class NavShowAllButtonComponent {
  @Input() of: MultiPage;
}
