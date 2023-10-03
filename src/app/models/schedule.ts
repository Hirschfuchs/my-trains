import { Train } from './train';

/**
 * Defines a schedule consisting of multiple trains and services.
 */
export class Schedule {
  elements: ScheduleElement[] = [];

  add(element: ScheduleElement) {
    this.elements.push(element);
    return this;
  }

  addAll(elements: ScheduleElement[]) {
    this.elements.concat(elements);
    return this;
  }

  static with(elements: ScheduleElement[]) {
    return new Schedule().addAll(elements);
  }
}

/**
 * Type that defines elements in a schedule.
 * Currently only used for trains, but also usable for abstractions such as idle times.
 */
export type ScheduleElement = Train;
