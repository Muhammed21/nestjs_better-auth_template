export class SignInQuery {
  constructor(
    public readonly provider: string,
    public readonly headers: HeadersInit,
  ) {}

  static create(provider: string, headers: HeadersInit) {
    return new SignInQuery(provider, headers);
  }
}
