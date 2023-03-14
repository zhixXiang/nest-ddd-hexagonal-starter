import { AccountId } from './value-object/AccountId';
import { Money } from './value-object/Money';

export class Account {
  readonly id: AccountId;
  private _balance: Money;

  constructor(id: AccountId, balance: Money) {
    this.id = id;
    this._balance = balance;
  }

  get balance(): Money {
    return this._balance;
  }

  set balance(balance: Money) {
    this._balance = balance;
  }
}
