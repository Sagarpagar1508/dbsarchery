import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddhiComponent } from './riddhi.component';

describe('RiddhiComponent', () => {
  let component: RiddhiComponent;
  let fixture: ComponentFixture<RiddhiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiddhiComponent]
    });
    fixture = TestBed.createComponent(RiddhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
