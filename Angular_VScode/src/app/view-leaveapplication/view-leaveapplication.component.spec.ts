import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveapplicationComponent } from './view-leaveapplication.component';

describe('ViewLeaveapplicationComponent', () => {
  let component: ViewLeaveapplicationComponent;
  let fixture: ComponentFixture<ViewLeaveapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeaveapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeaveapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
