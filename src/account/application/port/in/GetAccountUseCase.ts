import { AccountDto } from 'src/account/adapter/in/dto/AccountDto';

// src/account/application/port/in/CreateAccountUseCase.ts
export interface GetAccountUseCase {
  getAccountById(id: string): Promise<AccountDto>;
}

export const GetAccountUseCase = Symbol('GetAccountUseCase');
