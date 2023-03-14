import { SaveAccountPort } from './../../../application/port/out/SaveAccountPort';
import { GetAccountPort } from './../../../application/port/out/GetAccountPort';
import { CreateAccountPort } from '../../../application/port/out/CreateAccountPort';
import { Account } from '../../../domain/Account';
import { Inject } from '@nestjs/common';
import { IAccountRepository } from './IAccountRepository';
import { AccountId } from 'src/account/domain/value-object/AccountId';

export class AccountPersistenceAdapter
  implements CreateAccountPort, GetAccountPort, SaveAccountPort
{
  constructor(
    @Inject(IAccountRepository)
    private readonly accountRepository: IAccountRepository
  ) {}

  createAccount(account: Account): Promise<Account> {
    // throw new Error('Method not implemented.');
    return Promise.resolve(account);
  }
  async getAccountById(accountId: string): Promise<Account> {
    const account = this.accountRepository.findById(new AccountId(accountId));
    return account;
  }
  saveAccount(account: Account): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
