import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberModalComponent } from './member-modal.component';

describe('MemberModalComponent', () => {
  let component: MemberModalComponent;
  let fixture: ComponentFixture<MemberModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberModalComponent]
    });
    fixture = TestBed.createComponent(MemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
