import { UserCreator } from '../../../../../src/Contexts/PIE/Users/application/UserCreator'
import { UserMother } from '../../../PIE/Users/domain/UserMother'
import { UserFirstLastNameLengthExceeded } from '../../../../../src/Contexts/PIE/Users/domain/UserFirstLastNameLengthExceeded'
import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock'
import { CreateUserRequestMother } from './CreateUserRequestMother'

let repository: UserRepositoryMock
let creator: UserCreator

beforeEach(() => {
  repository = new UserRepositoryMock()
  creator = new UserCreator(repository)
})

describe('UserCreator', () => {
  it('should create a valid user', async () => {
    const request = CreateUserRequestMother.random()

    await creator.run(request)

    const user = UserMother.fromRequest(request)

    repository.assertSaveHaveBeenCalledWith(user)
  });

  it('should throw error if user first name length is exceeded', async () => {
    expect(() => {
      const request = CreateUserRequestMother.invalidRequest()

      const user = UserMother.fromRequest(request)

      creator.run(request)

      repository.assertSaveHaveBeenCalledWith(user);
    }).toThrow(UserFirstLastNameLengthExceeded);
  });
});