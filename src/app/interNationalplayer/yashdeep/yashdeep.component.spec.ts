import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YashdeepComponent } from './yashdeep.component';

describe('YashdeepComponent', () => {
  let component: YashdeepComponent;
  let fixture: ComponentFixture<YashdeepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YashdeepComponent]
    });
    fixture = TestBed.createComponent(YashdeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
