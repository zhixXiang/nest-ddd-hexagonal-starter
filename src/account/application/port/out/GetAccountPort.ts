import { Account } from '../../../domain/Account';

export interface GetAccountPort {
  getAccountById(accountId: string): Promise<Account | null>;
}

export const GetAccountPort = Symbol('GetAccountPort');
