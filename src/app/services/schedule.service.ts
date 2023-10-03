import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private readonly schedule: Schedule) {}
}
