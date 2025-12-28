export class FindColorTokensQuery {
  constructor(public readonly fileKey: string) {}

  static create(props: { fileKey: string }) {
    return new FindColorTokensQuery(props.fileKey);
  }
}
