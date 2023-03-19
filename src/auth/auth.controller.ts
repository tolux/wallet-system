import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Get,
  Res,
  Req,
  Patch,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { LoginUserDto } from '../dtos/login-user.dto';
import { User } from '../entity/user.entity';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { AdminJwtAuthGuard, UserJwtAuthGuard } from './jwt-auth.guard';
import { ErrLog } from 'src/util/errorLog';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Res() response,
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ) {
    await this.authService.signUp(createUserDto);
    return response.status(HttpStatus.CREATED).json({ message: 'created' });
  }

  @Post('/login')
  async login(
    @Body(ValidationPipe) loginUserDto: LoginUserDto,
  ): Promise<{ accessToken: string }> {
    const accessToken = await this.authService.login(loginUserDto);
    return { accessToken };
  }

  @UseGuards(UserJwtAuthGuard)
  @Get('/hello')
  async getProfile(@Req() req): Promise<Omit<User, 'password'>> {
    const { email } = req.query;

    const user = await this.authService.validateUserByEmail(email);

    return { ...user };
  }

  @UseGuards(AdminJwtAuthGuard)
  @Get('/all_users')
  async getAllUsers(): Promise<Omit<User, 'password'>[]> {
    const users = await this.authService.getAllUsers();

    return users;
  }

  @UseGuards(UserJwtAuthGuard)
  @Patch('/update_user')
  async updateUser(
    @Req() req,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ): Promise<Omit<User, 'password'>> {
    const { id } = req.body;

    const updatedUser = await this.authService.updateUser(id, updateUserDto);
    return updatedUser;
  }
}
