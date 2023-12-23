import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFountComponent } from './not-fount.component';

describe('NotFountComponent', () => {
  let component: NotFountComponent;
  let fixture: ComponentFixture<NotFountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotFountComponent]
    });
    fixture = TestBed.createComponent(NotFountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
