import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExitapplicationComponent } from './view-exitapplication.component';

describe('ViewExitapplicationComponent', () => {
  let component: ViewExitapplicationComponent;
  let fixture: ComponentFixture<ViewExitapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExitapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExitapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
