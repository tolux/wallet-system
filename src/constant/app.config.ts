import { UserRole } from 'src/entity/user.entity';

export const AdminInfo = {
  email: 'admin@dev.com',
  pasword: 'devAdmin123',

  role: UserRole.ADMIN,
};
export const AppConfig = {
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'userauth',
};
