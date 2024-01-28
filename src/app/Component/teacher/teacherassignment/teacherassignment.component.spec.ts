import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherassignmentComponent } from './teacherassignment.component';

describe('TeacherassignmentComponent', () => {
  let component: TeacherassignmentComponent;
  let fixture: ComponentFixture<TeacherassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherassignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
