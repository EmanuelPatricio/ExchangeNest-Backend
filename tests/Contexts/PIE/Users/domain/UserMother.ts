import { CreateUserRequest } from '../../../../../src/Contexts/PIE/Users/application/Request/CreateUserRequest'
import { User } from '../../../../../src/Contexts/PIE/Users/domain/User'
import { UserId } from '../../../../../src/Contexts/PIE/Shared/domain/Users/UserId';
import { UserFirstName } from '../../../../../src/Contexts/PIE/Users/domain/UserFirstName';
import { UserLastName } from '../../../../../src/Contexts/PIE/Users/domain/UserLastName';
import { UserNIC } from '../../../../../src/Contexts/PIE/Users/domain/UserNIC';
import { UserEmail } from '../../../../../src/Contexts/PIE/Users/domain/UserEmail';
import { UserBirthDate } from '../../../../../src/Contexts/PIE/Users/domain/UserBirthDate';
import { UserImage } from '../../../../../src/Contexts/PIE/Users/domain/UserImage';
import { UserIdMother } from '../../Shared/domain/Users/UserIdMother'
import { UserFirstNameMother } from './UserFirstNameMother';
import { UserLastNameMother } from './UserLastNameMother';
import { UserNICMother } from './UserNICMother';
import { UserEmailMother } from './UserEmailMother';
import { UserBirthDateMother } from './UserBirthDateMother';
import { UserPassword } from 'src/Contexts/PIE/Users/domain/UserPassword';
import { UserPasswordMother } from './UserPasswordMother';

export class UserMother {
  static create(
    id: UserId,
    firstName: UserFirstName,
    lastName: UserLastName,
    nic: UserNIC,
    email: UserEmail,
    password: UserPassword,
    birthDate: UserBirthDate,
    userImage: UserImage | null,
    idRole: number,
    idUserStatus: number,
    idCountry: number,
    createdOn: Date,
    createdBy: UserId,
    lastModifiedOn: Date | null,
    lastModifiedBy: number | null): User {
    return new User(id, firstName, lastName, nic, email, password, birthDate, userImage, idRole, idUserStatus, idCountry, createdOn, createdBy, lastModifiedOn, lastModifiedBy);
  }

  static fromRequest(request: CreateUserRequest): User {
    return this.create(
      UserIdMother.create(request.id),
      UserFirstNameMother.create(request.firstName),
      UserLastNameMother.create(request.lastName),
      UserNICMother.create(request.nic),
      UserEmailMother.create(request.email),
      UserPasswordMother.create(request.password),
      UserBirthDateMother.create(request.birthDate),
      request.image !== null ? new UserImage(request.image) : null,
      request.idRole,
      request.idUserStatus,
      request.idCountry,
      request.createdOn,
      UserIdMother.create(request.createdBy),
      request.lastModifiedOn,
      request.lastModifiedBy
    );
  }

  static random(): User {
    let id = UserIdMother.random()

    return this.create(
      id,
      UserFirstNameMother.random(),
      UserLastNameMother.random(),
      UserNICMother.random(),
      UserEmailMother.random(),
      UserPasswordMother.random(),
      UserBirthDateMother.random(),
      null,
      4,
      1,
      1,
      new Date(),
      id,
      null,
      null
    );
  }
}