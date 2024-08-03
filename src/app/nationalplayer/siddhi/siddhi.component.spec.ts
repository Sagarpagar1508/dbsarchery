import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiddhiComponent } from './siddhi.component';

describe('SiddhiComponent', () => {
  let component: SiddhiComponent;
  let fixture: ComponentFixture<SiddhiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiddhiComponent]
    });
    fixture = TestBed.createComponent(SiddhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
