import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyExitComponent } from './apply-exit.component';

describe('ApplyExitComponent', () => {
  let component: ApplyExitComponent;
  let fixture: ComponentFixture<ApplyExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyExitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
