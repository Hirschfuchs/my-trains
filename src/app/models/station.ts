export class Station {
  private readonly name: string;
  private readonly shortname: string;

  constructor(name: string) {
    this.name = name;
    this.shortname = name.substring(0, 4).toLowerCase();
  }
}
