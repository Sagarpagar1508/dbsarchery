import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShreyashComponent } from './shreyash.component';

describe('ShreyashComponent', () => {
  let component: ShreyashComponent;
  let fixture: ComponentFixture<ShreyashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShreyashComponent]
    });
    fixture = TestBed.createComponent(ShreyashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
