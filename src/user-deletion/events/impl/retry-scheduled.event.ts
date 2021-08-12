export class RetryScheduledEvent {
  constructor(
    public readonly userId: string,
    public readonly serviceName: string,
  ) {}
}
