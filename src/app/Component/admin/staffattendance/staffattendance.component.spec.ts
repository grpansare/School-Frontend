import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffattendanceComponent } from './staffattendance.component';

describe('StaffattendanceComponent', () => {
  let component: StaffattendanceComponent;
  let fixture: ComponentFixture<StaffattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffattendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
