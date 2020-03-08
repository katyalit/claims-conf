import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidTooltipComponent } from './invalid-tooltip.component';

describe('InvalidTooltipComponent', () => {
  let component: InvalidTooltipComponent;
  let fixture: ComponentFixture<InvalidTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
