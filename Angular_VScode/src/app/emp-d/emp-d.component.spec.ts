import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDComponent } from './emp-d.component';

describe('EmpDComponent', () => {
  let component: EmpDComponent;
  let fixture: ComponentFixture<EmpDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
