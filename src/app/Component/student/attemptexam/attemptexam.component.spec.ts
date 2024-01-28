import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptexamComponent } from './attemptexam.component';

describe('AttemptexamComponent', () => {
  let component: AttemptexamComponent;
  let fixture: ComponentFixture<AttemptexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttemptexamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttemptexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
