export class SignInQuery {
  constructor(public readonly provider: string) {}

  static create(provider: string) {
    return new SignInQuery(provider);
  }
}
