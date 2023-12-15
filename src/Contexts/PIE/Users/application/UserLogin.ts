import { UserEmail } from '../domain/UserEmail';
import { UserPassword } from '../domain/UserPassword';
import { UserRepository } from '../domain/UserRepository';
import { LoginUserRequest } from './Request/LoginUserRequest';
import { passwordEncrypted } from './PasswordOperations';
import { LoginUserResponse } from './Response/LoginUserResponse';
import { Nullable } from '../../../../../src/Contexts/Shared/domain/Nullable';

export class UserLogin {
  constructor(private repository: UserRepository) {}

  async run(request: LoginUserRequest): Promise<Nullable<LoginUserResponse>> {
    const user = await this.repository.login(
      new UserEmail(request.email),
      new UserPassword(passwordEncrypted(request.password))
    );

    return user
      ? {
          id: user.id.value,
          firstName: user.firstName.value,
          lastName: user.lastName.value,
          nic: user.nic.value,
          email: user.email.value,
          password: user.password.value,
          birthDate: user.birthDate.value,
          role: user.idRole.toString(),
          status: user.idRole.toString(),
          country: user.idRole.toString(),
          token: ''
        }
      : null;
  }
}
