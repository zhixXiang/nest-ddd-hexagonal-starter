import { IAccountRepository } from './adapter/out/persistence/IAccountRepository';
import { AccountPersistenceAdapter } from './adapter/out/persistence/AccountPersistenceAdapter';
import { Module } from '@nestjs/common';
import { AccountController } from './adapter/in/web/AccountController';
import { GetAccountService } from './application/service/GetAccountService';
import { GetAccountUseCase } from './application/port/in/GetAccountUseCase';
import { GetAccountPort } from './application/port/out/GetAccountPort';
import { CreateAccountPort } from './application/port/out/CreateAccountPort';
import { AccountRepository } from './adapter/out/persistence/AccountRepository';

@Module({
  controllers: [AccountController],
  providers: [
    {
      provide: GetAccountUseCase,
      useClass: GetAccountService
    },
    AccountPersistenceAdapter,
    {
      provide: GetAccountPort,
      useExisting: AccountPersistenceAdapter
    },
    {
      provide: CreateAccountPort,
      useExisting: AccountPersistenceAdapter
    },
    {
      provide: IAccountRepository,
      useClass: AccountRepository
    }
  ]
})
export class AccountModule {}
