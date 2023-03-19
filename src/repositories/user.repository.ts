import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User> {
    return this.findOneBy({ email });
  }
  async savemi(user): Promise<User> {
    return user;
  }

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, 10);
    return hash === password;
  }
}
