import { AccountDto } from 'src/account/adapter/in/dto/AccountDto';
import { CreateAccountDto } from 'src/account/adapter/in/dto/CreateAccountDto';

// src/account/application/port/in/CreateAccountUseCase.ts
export interface CreateAccountUseCase {
  createAccount(dto: CreateAccountDto): Promise<AccountDto>;
}
