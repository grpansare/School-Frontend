import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledexamsComponent } from './scheduledexams.component';

describe('ScheduledexamsComponent', () => {
  let component: ScheduledexamsComponent;
  let fixture: ComponentFixture<ScheduledexamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduledexamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduledexamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
