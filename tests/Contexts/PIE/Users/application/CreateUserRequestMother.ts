import { UserIdMother } from '../../Shared/domain/Users/UserIdMother'
import { CreateUserRequest } from '../../../../../src/Contexts/PIE/Users/application/Request/CreateUserRequest';
import { UserId } from '../../../../../src/Contexts/PIE/Shared/domain/Users/UserId';
import { UserFirstName } from '../../../../../src/Contexts/PIE/Users/domain/UserFirstName';
import { UserLastName } from '../../../../../src/Contexts/PIE/Users/domain/UserLastName';
import { UserNIC } from '../../../../../src/Contexts/PIE/Users/domain/UserNIC';
import { UserEmail } from '../../../../../src/Contexts/PIE/Users/domain/UserEmail';
import { UserBirthDate } from '../../../../../src/Contexts/PIE/Users/domain/UserBirthDate';
import { UserImage } from '../../../../../src/Contexts/PIE/Users/domain/UserImage';
import { UserFirstNameMother } from '../domain/UserFirstNameMother';
import { UserLastNameMother } from '../domain/UserLastNameMother';
import { UserNICMother } from '../domain/UserNICMother';
import { UserEmailMother } from '../domain/UserEmailMother';
import { UserBirthDateMother } from '../domain/UserBirthDateMother';
import { UserPassword } from 'src/Contexts/PIE/Users/domain/UserPassword';
import { UserPasswordMother } from '../domain/UserPasswordMother';

export class CreateUserRequestMother {
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
    lastModifiedOn: null,
    lastModifiedBy: null): CreateUserRequest {
    return {
      id: id.value,
      firstName: firstName.value,
      lastName: lastName.value,
      nic: nic.value,
      email: email.value,
      password: password.value,
      birthDate: birthDate.value,
      image: userImage === null ? null : userImage.value,
      idRole: idRole,
      idUserStatus: idUserStatus,
      idCountry: idCountry,
      createdOn: createdOn,
      createdBy: id.value,
      lastModifiedOn: lastModifiedOn,
      lastModifiedBy: lastModifiedBy
    };
  }

  static random(): CreateUserRequest {
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
      null,
      null
    )
  }

  static invalidRequest(): CreateUserRequest {
    let id = UserIdMother.random().value
    return {
      id: id,
      firstName: UserFirstNameMother.invalidName(),
      lastName: UserLastNameMother.random().value,
      nic: UserNICMother.random().value,
      email: UserEmailMother.random().value,
      password: UserPasswordMother.random().value,
      birthDate: UserBirthDateMother.random().value,
      image: null,
      idRole: 4,
      idUserStatus: 1,
      idCountry: 1,
      createdOn: new Date(),
      createdBy: id,
      lastModifiedOn: null,
      lastModifiedBy: null
    };
  }
}

 
 
 
 
 
 
 
 
 
 
 
 
 
