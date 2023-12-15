import { UserEmail } from "src/Contexts/PIE/Users/domain/UserEmail";
import { User } from "../../../../../src/Contexts/PIE/Users/domain/User";
import { UserRepository } from "../../../../../src/Contexts/PIE/Users/domain/UserRepository";
import { UserPassword } from "src/Contexts/PIE/Users/domain/UserPassword";
import { Nullable } from "src/Contexts/Shared/domain/Nullable";

export class UserRepositoryMock implements UserRepository {
  private saveMock: jest.Mock;

  constructor() {
    this.saveMock = jest.fn();
  }

  async save(user: User): Promise<void> {
    this.saveMock(user);
  }

  async login(_email: UserEmail, _password: UserPassword): Promise<Nullable<User>> {
    return null
  }

  assertSaveHaveBeenCalledWith(expected: User): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }

}