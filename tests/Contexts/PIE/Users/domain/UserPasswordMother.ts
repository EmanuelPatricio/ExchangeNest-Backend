import { UserPassword } from '../../../../../src/Contexts/PIE/Users/domain/UserPassword';
import { WordMother } from '../../../Shared/domain/WordMother';

export class UserPasswordMother {
  static create(value: string): UserPassword {
    return new UserPassword(value);
  }

  static random(): UserPassword {
    return this.create(WordMother.random({ maxLength: 30 }));
  }
}