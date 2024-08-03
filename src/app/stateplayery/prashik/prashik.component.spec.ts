import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrashikComponent } from './prashik.component';

describe('PrashikComponent', () => {
  let component: PrashikComponent;
  let fixture: ComponentFixture<PrashikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrashikComponent]
    });
    fixture = TestBed.createComponent(PrashikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
