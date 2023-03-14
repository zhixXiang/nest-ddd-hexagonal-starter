import { Account } from '../../../domain/Account';

export interface SaveAccountPort {
  saveAccount(account: Account): Promise<void>;
}
