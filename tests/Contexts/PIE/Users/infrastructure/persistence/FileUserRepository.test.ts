import { FileUserRepository } from '../../../../../../src/Contexts/PIE/Users/infrastructure/persistence/FileUserRepository'
import { UserMother } from '../../domain/UserMother'

describe('Save User', () => {
  it('should save a user', async () => {
    const repository = new FileUserRepository()
    
    const user = UserMother.random()

    await repository.save(user)
  })
})

describe('Find User', () => {
  it('should find an existing user', async () => {
    const repository = new FileUserRepository()

    const expectedUser = UserMother.random()

    await repository.save(expectedUser)

    const user = await repository.search(expectedUser.id.value)
    expect(user).toEqual(expectedUser);
  })
})