import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPageFormComponent } from './multi-page-form.component';

describe('MultiPageFormComponent', () => {
  let component: MultiPageFormComponent;
  let fixture: ComponentFixture<MultiPageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
