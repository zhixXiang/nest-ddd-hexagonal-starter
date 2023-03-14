// AccountDto.ts
export class AccountDto {
  constructor(id: string, balance: number) {
    this.id = id;
    this.balance = balance;
  }

  id: string;
  balance: number;
}
