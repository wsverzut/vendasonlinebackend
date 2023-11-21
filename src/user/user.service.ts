import { hash } from 'bcrypt';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(CreateUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;

    const passwordHash = await hash(CreateUserDto.password, saltOrRounds);

    return this.userRepository.save({
      ...CreateUserDto,
      typeUser: 1,
      password: passwordHash,
    });
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
