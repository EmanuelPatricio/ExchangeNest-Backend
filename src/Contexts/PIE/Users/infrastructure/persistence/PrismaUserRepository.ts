import { Nullable } from '../../../../Shared/domain/Nullable';
import { prisma } from '../../../../../../src/Contexts/Shared/infrastructure/persistence/prisma/PrismaClientFactory';
import { User } from '../../domain/User';
import { UserId } from '../../../Shared/domain/Users/UserId';
import { UserRepository } from '../../domain/UserRepository';
import { UserEmail } from '../../domain/UserEmail';
import { UserPassword } from '../../domain/UserPassword';
import { UserFirstName } from '../../domain/UserFirstName';
import { UserLastName } from '../../domain/UserLastName';
import { UserNIC } from '../../domain/UserNIC';
import { UserBirthDate } from '../../domain/UserBirthDate';
import { UserImage } from '../../domain/UserImage';

export class PrismaUserRepository implements UserRepository {
  public async save(user: User): Promise<void> {
    await prisma.users.create({
      data: {
        id: user.id.value,
        first_name: user.firstName.value,
        last_name: user.lastName.value,
        nic: user.nic.value,
        email: user.email.value,
        password: user.password.value,
        birth_date: user.birthDate.value,
        user_image: user.userImage?.value || null,
        id_role: user.idRole,
        id_user_status: user.idUserStatus,
        id_country: user.idCountry,
        created_on: user.createdOn,
        created_by: user.createdBy.value,
        last_modified_on: user.lastModifiedOn || null,
        last_modified_by: user.lastModifiedBy || null
      }
    })
  }

  public async login(email: UserEmail, password: UserPassword): Promise<Nullable<User>> {
    const user = await prisma.users.findFirst({
      where: {
        email: email.value,
        password: password.value
      }
    });

    return user !== null ? new User(
      new UserId(user.id),
      new UserFirstName(user.first_name),
      new UserLastName(user.last_name),
      new UserNIC(user.nic),
      new UserEmail(user.email),
      new UserPassword(user.password),
      new UserBirthDate(user.birth_date),
      user.user_image !== null ? new UserImage(user.user_image) : null,
      user.id_role,
      user.id_user_status,
      user.id_country,
      user.created_on,
      new UserId(user.created_by),
      user.last_modified_on,
      user.last_modified_by
    ) : null;
  }
}