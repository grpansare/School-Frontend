import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayclassinfoComponent } from './displayclassinfo.component';

describe('DisplayclassinfoComponent', () => {
  let component: DisplayclassinfoComponent;
  let fixture: ComponentFixture<DisplayclassinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayclassinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayclassinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
