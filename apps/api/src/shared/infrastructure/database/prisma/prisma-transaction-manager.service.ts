import { TransactionHost } from '@nestjs-cls/transactional';
import { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';
import { Injectable } from '@nestjs/common';
import { TransactionManagerService } from 'src/shared/application/database/protocols/transaction-manager.protocol';

@Injectable()
export class PrismaTransactionManagerService
  implements TransactionManagerService
{
  constructor(
    private readonly txHost: TransactionHost<TransactionalAdapterPrisma>,
  ) {}

  async execute<T>(work: () => Promise<T>): Promise<T> {
    return await this.txHost.withTransaction(work);
  }
}
