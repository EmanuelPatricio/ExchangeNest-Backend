import container from '../../../../../../src/apps/pie/dependency-injection';
import { UserRepository } from '../../../../../../src/Contexts/PIE/Users/domain/UserRepository';
import { EnvironmentArranger } from '../../../../Shared/infrastructure/arranger/EnvironmentArranger';
import { UserMother } from '../../domain/UserMother';

const repository: UserRepository = container.get('Pie.Users.domain.UserRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Pie.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('UserRepository', () => {
  describe('#save', () => {
    it('should save a user', async () => {
      const user = UserMother.random();
      await repository.save(user);
    });
  });
});