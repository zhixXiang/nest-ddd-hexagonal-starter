import { GetAccountPort } from './../port/out/GetAccountPort';
import { GetAccountUseCase } from './../port/in/GetAccountUseCase';
import { Inject, Injectable } from '@nestjs/common';
import { AccountDto } from 'src/account/adapter/in/dto/AccountDto';
@Injectable()
export class GetAccountService implements GetAccountUseCase {
  constructor(
    @Inject(GetAccountPort) private readonly getAccountPort: GetAccountPort
  ) {}

  async getAccountById(id: string): Promise<AccountDto> {
    const account = await this.getAccountPort.getAccountById(id);
    return new AccountDto(account.id.getValue(), account.balance.getValue());
  }
}
