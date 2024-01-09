import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodiumComponent } from './podiom.component';

describe('PodiomComponent', () => {
  let component: PodiumComponent;
  let fixture: ComponentFixture<PodiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodiumComponent]
    });
    fixture = TestBed.createComponent(PodiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
