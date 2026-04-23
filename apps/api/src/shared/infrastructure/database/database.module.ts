import { Module, Global, forwardRef } from '@nestjs/common';
import { ClsModule } from 'nestjs-cls';
import { ClsPluginTransactional } from '@nestjs-cls/transactional';
import { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';
import { TransactionHost } from '@nestjs-cls/transactional';
import { PrismaService } from './prisma/prisma.service';
import { TransactionManagerService } from 'src/shared/application/database/protocols/transaction-manager.protocol';
import { PrismaTransactionManagerService } from './prisma/prisma-transaction-manager.service';

@Global()
@Module({
  imports: [
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
      plugins: [
        new ClsPluginTransactional({
          imports: [forwardRef(() => DatabaseModule)],
          adapter: new TransactionalAdapterPrisma({
            prismaInjectionToken: 'PRISMA_REAL_CLIENT',
          }),
        }),
      ],
    }),
  ],
  providers: [
    {
      provide: 'PRISMA_REAL_CLIENT',
      useClass: PrismaService,
    },
    {
      provide: PrismaService,
      inject: ['PRISMA_REAL_CLIENT', TransactionHost],
      useFactory: (
        prismaReal: PrismaService,
        txHost: TransactionHost<TransactionalAdapterPrisma>,
      ) => {
        return new Proxy(prismaReal, {
          get(target, prop) {
            const client = txHost.tx || target;
            return Reflect.get(client, prop);
          },
        });
      },
    },
    {
      provide: TransactionManagerService,
      useClass: PrismaTransactionManagerService,
    },
  ],
  exports: [PrismaService, TransactionManagerService, 'PRISMA_REAL_CLIENT'],
})
export class DatabaseModule {}
