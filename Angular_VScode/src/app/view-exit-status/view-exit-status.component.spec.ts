import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExitStatusComponent } from './view-exit-status.component';

describe('ViewExitStatusComponent', () => {
  let component: ViewExitStatusComponent;
  let fixture: ComponentFixture<ViewExitStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExitStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExitStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
