import { UserNIC } from '../../../../../src/Contexts/PIE/Users/domain/UserNIC';
import { WordMother } from '../../../Shared/domain/WordMother';

export class UserNICMother {
  static create(value: string): UserNIC {
    return new UserNIC(value);
  }

  static random(): UserNIC {
    return this.create(WordMother.random({ maxLength: 11 }));
  }
}