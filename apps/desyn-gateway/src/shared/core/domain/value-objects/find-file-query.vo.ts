export class FindFileQuery {
  constructor(public readonly fileKey: string) {}

  static create(props: { fileKey: string }) {
    return new FindFileQuery(props.fileKey);
  }
}
