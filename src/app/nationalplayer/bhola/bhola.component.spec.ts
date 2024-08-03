import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BholaComponent } from './bhola.component';

describe('BholaComponent', () => {
  let component: BholaComponent;
  let fixture: ComponentFixture<BholaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BholaComponent]
    });
    fixture = TestBed.createComponent(BholaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
