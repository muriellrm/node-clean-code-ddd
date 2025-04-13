import { randomUUID } from "crypto";

export class Answer {
  constructor(
    public content: string,
    public authorId: string,
    public questionId: string,
    public id?: string
  ) {
    this.id = id || randomUUID();
  }
}
