import { prisma } from '../../../../src/Contexts/Shared/infrastructure/persistence/prisma/PrismaClientFactory';
import { PrismaClient } from '@prisma/client';

describe('PrismaClientFactory', () => {
  it('uses the client with the connection already established', () => {
    expect(prisma).toBeInstanceOf(PrismaClient)
    expect(prisma).toBeTruthy()
  });
});