import { Station } from './station';

/**
 * Defines a timetable for a single train
 */
export class Timetable {
  private readonly elements: TimeElement[] = [];

  addElement(time: Time, place: Station) {
    this.elements.push({ time, place });
    this.elements.sort((element1, element2) =>
      compareTimes(element1.time, element2.time),
    );
  }

  addAllElements(elements: TimeElement[]) {
    elements.forEach((element) => this.addElement(element.time, element.place));
  }

  nextElement(from: Time): TimeElement | null {
    let nextElementId = 0;
    let nextElement = this.elements[0];
    do {
      if (this.elements.length <= nextElementId) {
        return null;
      }
      nextElement = this.elements[nextElementId];
      nextElementId++;
    } while (compareTimes(nextElement.time, from) < 0);
    return nextElement;
  }

  get allElements() {
    return this.elements;
  }
}

type TimeElement = {
  time: Time;
  place: Station;
};

type Time = {
  hour: number;
  minute: number;
  second: number;
};

function compareTimes(time1: Time, time2: Time) {
  if (time1.hour === time2.hour) {
    if (time1.minute === time2.minute) {
      if (time1.second === time2.second) {
        return 0;
      } else if (time1.second < time2.second) {
        return -1;
      } else {
        return 1;
      }
    } else if (time1.minute < time2.minute) {
      return -1;
    } else {
      return 1;
    }
  } else if (time1.hour < time2.hour) {
    return -1;
  } else {
    return 1;
  }
}
