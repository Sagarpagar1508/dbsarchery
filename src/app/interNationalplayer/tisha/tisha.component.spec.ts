import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TishaComponent } from './tisha.component';

describe('TishaComponent', () => {
  let component: TishaComponent;
  let fixture: ComponentFixture<TishaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TishaComponent]
    });
    fixture = TestBed.createComponent(TishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
