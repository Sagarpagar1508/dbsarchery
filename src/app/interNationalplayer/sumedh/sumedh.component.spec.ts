import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumedhComponent } from './sumedh.component';

describe('SumedhComponent', () => {
  let component: SumedhComponent;
  let fixture: ComponentFixture<SumedhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumedhComponent]
    });
    fixture = TestBed.createComponent(SumedhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
