import { UserFirstName } from '../../../../../src/Contexts/PIE/Users/domain/UserFirstName';
import { WordMother } from '../../../Shared/domain/WordMother';

export class UserFirstNameMother {
  static create(value: string): UserFirstName {
    return new UserFirstName(value);
  }

  static random(): UserFirstName {
    return this.create(WordMother.random({ maxLength: 20 }));
  }

  static invalidName(): string {
    return "a".repeat(40);
  }
}