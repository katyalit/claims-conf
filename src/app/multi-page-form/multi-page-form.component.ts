import { Component, OnInit } from '@angular/core';
import MultiPage from '../multi-page/multi-page';

@Component({
  selector: 'multi-page-form',
  templateUrl: './multi-page-form.component.html',
  styleUrls: ['./multi-page-form.component.css', '../bootstrap.css']
})
export class MultiPageFormComponent extends MultiPage implements OnInit {


  ngOnInit(): void {
  }

}
