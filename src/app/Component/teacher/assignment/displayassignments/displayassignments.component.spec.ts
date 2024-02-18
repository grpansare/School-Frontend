import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayassignmentsComponent } from './displayassignments.component';

describe('DisplayassignmentsComponent', () => {
  let component: DisplayassignmentsComponent;
  let fixture: ComponentFixture<DisplayassignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayassignmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
