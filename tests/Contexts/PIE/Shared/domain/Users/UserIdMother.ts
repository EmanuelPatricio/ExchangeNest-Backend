import { UserId } from '../../../../../../src/Contexts/PIE/Shared/domain/Users/UserId';
import { NumberMother } from '../../../../Shared/domain/NumberMother'

export class UserIdMother {
  static create(value: number): UserId {
    return new UserId(value);
  }
  static random(): UserId {
    return this.create(NumberMother.random());
  }
}