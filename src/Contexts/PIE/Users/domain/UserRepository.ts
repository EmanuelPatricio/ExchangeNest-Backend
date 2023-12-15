import { Nullable } from '../../../../../src/Contexts/Shared/domain/Nullable';
import { User } from './User';
import { UserEmail } from './UserEmail';
import { UserPassword } from './UserPassword';

export interface UserRepository {
  save(user: User): Promise<void>;
  login(email: UserEmail, password: UserPassword): Promise<Nullable<User>>;
}
