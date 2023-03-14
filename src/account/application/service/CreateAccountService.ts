import { Inject, Injectable } from '@nestjs/common';
import { AccountDto } from 'src/account/adapter/in/dto/AccountDto';
import { CreateAccountDto } from 'src/account/adapter/in/dto/CreateAccountDto';
import { Account } from 'src/account/domain/Account';
import { AccountId } from 'src/account/domain/value-object/AccountId';
import { Money } from 'src/account/domain/value-object/Money';
import { CreateAccountUseCase } from '../port/in/CreateAccountUseCase';
import { CreateAccountPort } from '../port/out/CreateAccountPort';

@Injectable()
export class CreateAccountService implements CreateAccountUseCase {
  constructor(
    @Inject(CreateAccountPort)
    private readonly createAccountPort: CreateAccountPort
  ) {}
  async createAccount(dto: CreateAccountDto): Promise<AccountDto> {
    const id = new AccountId(dto.ownerId);
    const balance = new Money(dto.initialBalance);

    const account = await this.createAccountPort.createAccount(
      new Account(id, balance)
    );

    // account domain to AccountDto
    const accountDto = new AccountDto(
      account.id.getValue(),
      account.balance.getValue()
    );

    return accountDto;
  }
}
