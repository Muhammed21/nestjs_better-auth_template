export class Session {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly expiresAt: Date,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
