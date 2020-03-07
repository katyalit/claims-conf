import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPagesFourSixComponent } from './text-pages-four-six.component';

describe('TextPagesFourSixComponent', () => {
  let component: TextPagesFourSixComponent;
  let fixture: ComponentFixture<TextPagesFourSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextPagesFourSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPagesFourSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
