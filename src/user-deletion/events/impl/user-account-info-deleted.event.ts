export class UserAccountInfoDeletedEvent {
  constructor(
    public readonly userId: string,
    public readonly success: boolean,
    public readonly error: any,
  ) {}
}
