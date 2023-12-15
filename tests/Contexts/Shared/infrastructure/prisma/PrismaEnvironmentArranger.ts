import { prisma } from '../../../../../src/Contexts/Shared/infrastructure/persistence/prisma/PrismaClientFactory';
import { EnvironmentArranger } from '../arranger/EnvironmentArranger';

export class PrismaEnvironmentArranger extends EnvironmentArranger {
  public async arrange(): Promise<void> {
    await this.cleanDatabase();
  }

  protected async cleanDatabase(): Promise<void> {
    const tableNames = await prisma.$queryRaw<string[]>`SELECT table_name
                                                        FROM information_schema.tables
                                                        WHERE table_schema='public'
                                                        AND table_type='BASE TABLE'
                                                        AND table_name NOT LIKE '\_%'`

    for (const tableName of tableNames) {
      await prisma.$queryRaw`TRUNCATE TABLE ${tableName}`
    }
  }

  public async close(): Promise<void> {
    return await prisma.$disconnect();
  }
}