export class SessionQuery {
  constructor(public readonly sessionId: string) {}

  static create(sessionId: string) {
    return new SessionQuery(sessionId);
  }
}
