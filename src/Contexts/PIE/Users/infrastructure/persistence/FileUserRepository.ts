import { serialize, deserialize } from 'bson';
import fs from 'fs';
import { User } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';
import path from 'path';
import { Nullable } from '../../../../../../src/Contexts/Shared/domain/Nullable';
import { UserPassword } from '../../domain/UserPassword';
import { UserEmail } from '../../domain/UserEmail';

export class FileUserRepository implements UserRepository {
  private FILE_PATH = path.join(__dirname, 'users').replace(/\\/g, '/');

  async save(user: User): Promise<void> {
    await fs.promises.writeFile(this.filePath(user.id.value), serialize(user));
  }

  async search(userId: number): Promise<User> {
    const userData = await fs.promises.readFile(this.filePath(userId));

    const {
      id,
      firstName,
      lastName,
      nic,
      email,
      password,
      birthDate,
      userImage,
      idRole,
      idUserStatus,
      idCountry,
      createdOn,
      createdBy,
      lastModifiedOn,
      lastModifiedBy
    } = deserialize(userData);

    return new User(
      id,
      firstName,
      lastName,
      nic,
      email,
      password,
      birthDate,
      userImage,
      idRole,
      idUserStatus,
      idCountry,
      createdOn,
      createdBy,
      lastModifiedOn,
      lastModifiedBy
    );
  }

  async login(_email: UserEmail, _password: UserPassword): Promise<Nullable<User>> {
    // const userData = await fs.promises.readFile(this.filePath(userId));

    // const { id, firstName, lastName, nic, email, password, birthDate, userImage, idRole, idUserStatus, idCountry, createdOn, createdBy, lastModifiedOn, lastModifiedBy } = deserialize(userData);

    // return new User(id, firstName, lastName, nic, email, password, birthDate, userImage, idRole, idUserStatus, idCountry, createdOn, createdBy, lastModifiedOn, lastModifiedBy);
    return null;
  }

  private filePath(id: number): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}
