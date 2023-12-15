import { Nullable } from '../../../../Shared/domain/Nullable';
import { MongoRepository } from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { UserId } from '../../../Shared/domain/Users/UserId';
import { User } from '../../domain/User';
import { UserEmail } from '../../domain/UserEmail';
import { UserPassword } from '../../domain/UserPassword';
import { UserRepository } from '../../domain/UserRepository';

interface UserDocument {
  id: number
  firstName: string
  lastName: string
  nic: string
  email: string
  password: string
  birthDate: Date
  userImage: string | null
  idRole: number
  idUserStatus: number
  idCountry: number
  createdOn: Date
  createdBy: number
  lastModifiedOn: Date | null
  lastModifiedBy: number | null
};

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {
  public save(user: User): Promise<void> {
    return this.persist(user.id.value, user);
  }

  public async search(id: UserId): Promise<Nullable<User>> {
    const collection = await this.collection();
    const document = await collection.findOne<UserDocument>({ id: id.value });

    return document ? User.fromPrimitives({
      id: document.id,
      firstName: document.firstName,
      lastName: document.lastName,
      nic: document.nic,
      email: document.email,
      password: document.password,
      birthDate: document.birthDate,
      image: document.userImage,
      role: document.idRole,
      status: document.idUserStatus,
      country: document.idCountry,
      createdOn: document.createdOn,
      createdBy: document.createdBy,
      lastModifiedOn: document.lastModifiedOn,
      lastModifiedBy: document.lastModifiedBy
    }) : null;
  }

  public async login(email: UserEmail, password: UserPassword): Promise<Nullable<User>> {
    const collection = await this.collection();
    const document = await collection.findOne<UserDocument>({ email: email.value, password: password.value });

    return document ? User.fromPrimitives({
      id: document.id,
      firstName: document.firstName,
      lastName: document.lastName,
      nic: document.nic,
      email: document.email,
      password: document.password,
      birthDate: document.birthDate,
      image: document.userImage,
      role: document.idRole,
      status: document.idUserStatus,
      country: document.idCountry,
      createdOn: document.createdOn,
      createdBy: document.createdBy,
      lastModifiedOn: document.lastModifiedOn,
      lastModifiedBy: document.lastModifiedBy
    }) : null;
  }

  protected collectionName(): string {
    return 'users';
  }
}