import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { UserFirstLastNameLengthExceeded } from './UserFirstLastNameLengthExceeded';

export class UserLastName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan30Characters(value);
  }

  private ensureLengthIsLessThan30Characters(value: string): void {
    if (value.length > 30) {
      throw new UserFirstLastNameLengthExceeded(`The User last name <${value}> has more than 30 characters`);
    }
  }
}