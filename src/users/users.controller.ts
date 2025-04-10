import { Controller, Get, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'shared-orm-library/dist/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}