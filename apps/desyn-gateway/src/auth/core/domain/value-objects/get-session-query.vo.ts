export class GetSessionQuery {
  constructor(public readonly headers: HeadersInit) {}

  static create(headers: HeadersInit) {
    return new GetSessionQuery(headers);
  }
}
