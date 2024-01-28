import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayteachersComponent } from './displayteachers.component';

describe('DisplayteachersComponent', () => {
  let component: DisplayteachersComponent;
  let fixture: ComponentFixture<DisplayteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayteachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
