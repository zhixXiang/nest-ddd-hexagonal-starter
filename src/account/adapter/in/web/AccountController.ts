import { Controller, Get, Inject, Param } from '@nestjs/common';
import { GetAccountUseCase } from 'src/account/application/port/in/GetAccountUseCase';
import { AccountDto } from '../dto/AccountDto';

@Controller('accounts')
export class AccountController {
  constructor(
    @Inject(GetAccountUseCase)
    private readonly getAccountUseCase: GetAccountUseCase
  ) {}

  @Get(':id')
  async getAccount(@Param('id') id: string): Promise<AccountDto> {
    const account = await this.getAccountUseCase.getAccountById(id);
    return account;
  }
}
