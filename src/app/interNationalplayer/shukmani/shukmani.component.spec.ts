import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShukmaniComponent } from './shukmani.component';

describe('ShukmaniComponent', () => {
  let component: ShukmaniComponent;
  let fixture: ComponentFixture<ShukmaniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShukmaniComponent]
    });
    fixture = TestBed.createComponent(ShukmaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
