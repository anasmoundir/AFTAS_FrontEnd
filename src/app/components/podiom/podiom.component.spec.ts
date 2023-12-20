import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodiomComponent } from './podiom.component';

describe('PodiomComponent', () => {
  let component: PodiomComponent;
  let fixture: ComponentFixture<PodiomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodiomComponent]
    });
    fixture = TestBed.createComponent(PodiomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
