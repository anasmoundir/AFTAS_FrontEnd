import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerCardComponent } from './winner-card.component';

describe('WinnerCardComponent', () => {
  let component: WinnerCardComponent;
  let fixture: ComponentFixture<WinnerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinnerCardComponent]
    });
    fixture = TestBed.createComponent(WinnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
