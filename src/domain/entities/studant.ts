import { randomUUID } from "crypto";

export class Studant {
  constructor(public name: string, public id?: string) {
    this.id = id || randomUUID();
  }
}
