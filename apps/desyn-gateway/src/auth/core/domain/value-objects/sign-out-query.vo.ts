export class SignOutQuery {
  constructor(public readonly headers: HeadersInit) {}

  static create(headers: HeadersInit) {
    return new SignOutQuery(headers);
  }
}
