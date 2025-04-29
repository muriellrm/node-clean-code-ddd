import { UniqueEntityID } from "#/core/entities/unique-entity-id";

export class Entity<T = any> {
  private _id: UniqueEntityID;
  protected props: T;

  protected constructor(props: T, id?: UniqueEntityID) {
    this.props = props;
    this._id = id ?? new UniqueEntityID();
  }

  get id() {
    return this._id;
  }
}
