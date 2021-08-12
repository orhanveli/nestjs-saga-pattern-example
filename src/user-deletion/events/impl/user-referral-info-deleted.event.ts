export class UserReferralInfoDeletedEvent {
  constructor(
    public readonly userId: string,
    public readonly success: boolean,
    public readonly error: any = null,
  ) {}
}
