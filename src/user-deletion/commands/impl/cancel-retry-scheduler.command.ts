export class CancelRetrySchedulerCommand {
  constructor(
    public readonly userId: string,
    public readonly serviceName: string,
  ) {}
}
