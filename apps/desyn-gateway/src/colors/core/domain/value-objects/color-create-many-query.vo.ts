export class ColorCreateManyQuery {
  constructor(public readonly fileKey: string) {}

  static create(props: { fileKey: string }) {
    return new ColorCreateManyQuery(props.fileKey);
  }
}
