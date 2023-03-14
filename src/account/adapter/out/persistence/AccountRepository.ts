import { Injectable } from '@nestjs/common';
import { Account } from 'src/account/domain/Account';
import { AccountId } from 'src/account/domain/value-object/AccountId';
import { Money } from 'src/account/domain/value-object/Money';
import { IAccountRepository } from './IAccountRepository';

@Injectable()
export class AccountRepository implements IAccountRepository {
  findById(id: AccountId): Promise<Account> {
    return Promise.resolve(new Account(id, new Money(9999)));
  }
  findByEmail(email: string): Promise<Account> {
    throw new Error('Method not implemented.');
  }
  save(account: Account): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
