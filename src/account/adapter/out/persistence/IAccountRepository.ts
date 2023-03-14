import { Account } from 'src/account/domain/Account';
import { AccountId } from 'src/account/domain/value-object/AccountId';

export interface IAccountRepository {
  findById(id: AccountId): Promise<Account | null>;
  findByEmail(email: string): Promise<Account | null>;
  save(account: Account): Promise<void>;
}

export const IAccountRepository = Symbol('IAccountRepository');
