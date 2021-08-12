export class UpdateUserDeletionStatusCommand {
  constructor(
    public readonly userId: string,
    public readonly serviceName: string,
    public readonly status: string,
    public readonly payload: any = null,
  ) {}
}
