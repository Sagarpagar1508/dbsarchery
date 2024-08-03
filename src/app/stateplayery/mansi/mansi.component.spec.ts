import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MansiComponent } from './mansi.component';

describe('MansiComponent', () => {
  let component: MansiComponent;
  let fixture: ComponentFixture<MansiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MansiComponent]
    });
    fixture = TestBed.createComponent(MansiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
