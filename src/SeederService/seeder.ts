import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminInfo } from '../constant/app.config';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(User)
    private readonly adminRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    const admin = new User();
    admin.email = AdminInfo.email;
    admin.password = await bcrypt.hash(AdminInfo.pasword, 10);
    admin.role = AdminInfo.role;

    await this.adminRepository.save(admin);
  }
}

// import { Factory, Seeder } from 'typeorm-seeding';
// import { Connection } from 'typeorm';
// import { User } from '../entities/user.entity';

// export default class CreateUsers implements Seeder {
//     public async run(factory: Factory, connection: Connection): Promise<void> {
//         await connection
//             .createQueryBuilder()
//             .insert()
//             .into(User)
//             .values([
//                 { name: 'John Doe', email: 'john.doe@example.com' },
//                 { name: 'Jane Doe', email: 'jane.doe@example.com' },
//             ])
//             .execute();
//     }
// }
