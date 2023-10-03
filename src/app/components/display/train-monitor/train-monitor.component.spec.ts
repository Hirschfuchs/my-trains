import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainMonitorComponent } from './train-monitor.component';

describe('TrainMonitorComponent', () => {
  let component: TrainMonitorComponent;
  let fixture: ComponentFixture<TrainMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainMonitorComponent]
    });
    fixture = TestBed.createComponent(TrainMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
