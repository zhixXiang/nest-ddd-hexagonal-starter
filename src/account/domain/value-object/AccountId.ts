export class AccountId {
  private readonly id: string;

  constructor(id: string) {
    this.id = id;
  }

  public getValue(): string {
    return this.id;
  }

  public static generate(): AccountId {
    return new AccountId(Math.floor(Math.random() * 1000).toString());
  }
}
