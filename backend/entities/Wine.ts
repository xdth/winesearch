import { uuid } from 'uuidv4'

export class Wine {
  public readonly id: string;
  public title: string;
  public designation: string;
  public country: string;

  constructor(props: Omit<Wine, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}