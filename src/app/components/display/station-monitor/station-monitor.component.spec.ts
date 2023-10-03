import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationMonitorComponent } from './station-monitor.component';

describe('StationMonitorComponent', () => {
  let component: StationMonitorComponent;
  let fixture: ComponentFixture<StationMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StationMonitorComponent]
    });
    fixture = TestBed.createComponent(StationMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
