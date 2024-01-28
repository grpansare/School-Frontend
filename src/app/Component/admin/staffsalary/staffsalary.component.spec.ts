import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsalaryComponent } from './staffsalary.component';

describe('StaffsalaryComponent', () => {
  let component: StaffsalaryComponent;
  let fixture: ComponentFixture<StaffsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffsalaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
