import { UserEmail } from '../../../../../src/Contexts/PIE/Users/domain/UserEmail';
import { WordMother } from '../../../Shared/domain/WordMother';

export class UserEmailMother {
  static create(value: string): UserEmail {
    return new UserEmail(value);
  }

  static random(): UserEmail {
    return this.create(WordMother.random({ maxLength: 30 }));
  }
}