import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExitStatusComponent } from './update-exit-status.component';

describe('UpdateExitStatusComponent', () => {
  let component: UpdateExitStatusComponent;
  let fixture: ComponentFixture<UpdateExitStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExitStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExitStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
