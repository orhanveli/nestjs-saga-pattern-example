export class RetrySchedulerCancelledEvent {
  constructor(
    public readonly userId: string,
    public readonly serviceName: string,
  ) {}
}
