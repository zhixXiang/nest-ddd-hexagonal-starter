import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { DomainExceptionFilter } from 'shared/exceptions/DomainExceptionFilter';
import { AccountModule } from './account/account.module';

@Module({
  imports: [AccountModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: DomainExceptionFilter
    }
  ]
})
export class AppModule {}
