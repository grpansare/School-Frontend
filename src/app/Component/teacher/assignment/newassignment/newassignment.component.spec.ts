import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewassignmentComponent } from './newassignment.component';

describe('NewassignmentComponent', () => {
  let component: NewassignmentComponent;
  let fixture: ComponentFixture<NewassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewassignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
