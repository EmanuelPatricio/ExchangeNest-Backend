import { UserBirthDate } from '../../../../../src/Contexts/PIE/Users/domain/UserBirthDate';
import { DateMother } from '../../../Shared/domain/DateMother';

export class UserBirthDateMother {
  static create(value: Date): UserBirthDate {
    return new UserBirthDate(value);
  }

  static random(): UserBirthDate {
    return this.create(DateMother.random());
  }
}