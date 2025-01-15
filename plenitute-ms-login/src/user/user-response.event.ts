export class UserResponseEvent {
  constructor(
    public readonly email: string,
    public readonly status: number,
  ) {}
}