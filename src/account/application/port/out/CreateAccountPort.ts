import { Account } from '../../../domain/Account';

export interface CreateAccountPort {
  createAccount(account: Account): Promise<Account>;
}

export const CreateAccountPort = Symbol('CreateAccountPort');
