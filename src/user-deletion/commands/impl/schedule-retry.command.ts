export class ScheduleRetryCommand {
  constructor(
    public readonly userId: string,
    public readonly serviceName: string,
  ) {}
}
