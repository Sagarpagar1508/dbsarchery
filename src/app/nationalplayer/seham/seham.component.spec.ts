import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SehamComponent } from './seham.component';

describe('SehamComponent', () => {
  let component: SehamComponent;
  let fixture: ComponentFixture<SehamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SehamComponent]
    });
    fixture = TestBed.createComponent(SehamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
