import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNextPageComponent } from './nav-next-page.component';

describe('NavNextPageComponent', () => {
  let component: NavNextPageComponent;
  let fixture: ComponentFixture<NavNextPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavNextPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
