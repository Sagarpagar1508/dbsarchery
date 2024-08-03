import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateplayeryComponent } from './stateplayery.component';

describe('StateplayeryComponent', () => {
  let component: StateplayeryComponent;
  let fixture: ComponentFixture<StateplayeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateplayeryComponent]
    });
    fixture = TestBed.createComponent(StateplayeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
