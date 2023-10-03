import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePlannerComponent } from './schedule-planner.component';

describe('SchedulePlannerComponent', () => {
  let component: SchedulePlannerComponent;
  let fixture: ComponentFixture<SchedulePlannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePlannerComponent]
    });
    fixture = TestBed.createComponent(SchedulePlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
