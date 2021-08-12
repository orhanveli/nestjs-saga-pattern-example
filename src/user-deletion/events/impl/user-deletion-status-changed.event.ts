export class UserDeletionStatusChangedEvent {
  constructor(
    public readonly userId: string,
    public readonly serviceName: string,
    public readonly status: string,
  ) {}
}
