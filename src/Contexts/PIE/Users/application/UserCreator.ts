import { UserId } from '../../Shared/domain/Users/UserId';
import { User } from '../domain/User';
import { UserBirthDate } from '../domain/UserBirthDate';
import { UserEmail } from '../domain/UserEmail';
import { UserFirstName } from '../domain/UserFirstName';
import { UserImage } from '../domain/UserImage';
import { UserLastName } from '../domain/UserLastName';
import { UserNIC } from '../domain/UserNIC';
import { UserPassword } from '../domain/UserPassword';
import { UserRepository } from '../domain/UserRepository';
import { passwordEncrypted } from './PasswordOperations';
import { CreateUserRequest } from './Request/CreateUserRequest';

export class UserCreator {
  constructor(private repository: UserRepository) {}

  async run(request: CreateUserRequest) {
    request.password = passwordEncrypted(request.password)

    const user = new User(
      new UserId(request.id),
      new UserFirstName(request.firstName),
      new UserLastName(request.lastName),
      new UserNIC(request.nic),
      new UserEmail(request.email),
      new UserPassword(request.password),
      new UserBirthDate(request.birthDate),
      request.image === null ? null : new UserImage(request.image),
      request.idRole,
      request.idUserStatus,
      request.idCountry,
      new Date(request.createdOn),
      new UserId(request.id),
      null,
      null
    )
    
    return this.repository.save(user);
  }
}