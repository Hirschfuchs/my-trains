import { Timetable } from './timetable';

export class Train {
  private readonly trainnumber: string;
  private readonly type: TrainType;
  private readonly timetable: Timetable;

  constructor(trainnumber: string, type: TrainType, timetable: Timetable) {
    this.trainnumber = trainnumber;
    this.type = type;
    this.timetable = timetable;
  }
}

export class TrainType {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
