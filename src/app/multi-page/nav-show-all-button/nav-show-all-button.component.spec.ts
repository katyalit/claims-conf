import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavShowAllButtonComponent } from './nav-show-all-button.component';

describe('NavShowAllButtonComponent', () => {
  let component: NavShowAllButtonComponent;
  let fixture: ComponentFixture<NavShowAllButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavShowAllButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavShowAllButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
