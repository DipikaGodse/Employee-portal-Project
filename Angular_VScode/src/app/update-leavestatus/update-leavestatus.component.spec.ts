import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeavestatusComponent } from './update-leavestatus.component';

describe('UpdateLeavestatusComponent', () => {
  let component: UpdateLeavestatusComponent;
  let fixture: ComponentFixture<UpdateLeavestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLeavestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLeavestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
