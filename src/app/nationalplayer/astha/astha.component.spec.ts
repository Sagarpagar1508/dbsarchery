import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsthaComponent } from './astha.component';

describe('AsthaComponent', () => {
  let component: AsthaComponent;
  let fixture: ComponentFixture<AsthaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsthaComponent]
    });
    fixture = TestBed.createComponent(AsthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
