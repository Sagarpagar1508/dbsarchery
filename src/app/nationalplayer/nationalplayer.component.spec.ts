import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalplayerComponent } from './nationalplayer.component';

describe('NationalplayerComponent', () => {
  let component: NationalplayerComponent;
  let fixture: ComponentFixture<NationalplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalplayerComponent]
    });
    fixture = TestBed.createComponent(NationalplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
