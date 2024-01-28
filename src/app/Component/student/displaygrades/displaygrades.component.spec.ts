import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaygradesComponent } from './displaygrades.component';

describe('DisplaygradesComponent', () => {
  let component: DisplaygradesComponent;
  let fixture: ComponentFixture<DisplaygradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplaygradesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaygradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
