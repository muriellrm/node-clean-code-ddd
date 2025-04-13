import { randomUUID } from "crypto";

export class Instructor {
  constructor(public name: string, public id?: string) {
    this.id = id || randomUUID();
  }
}
