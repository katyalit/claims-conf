import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'invalid-tooltip',
  templateUrl: './invalid-tooltip.component.html',
  styleUrls: ['./invalid-tooltip.component.css']
})
export class InvalidTooltipComponent implements OnInit {

  @Input() show: boolean;

  ngOnInit(): void {
  }

}
