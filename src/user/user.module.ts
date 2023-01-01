import { UserResolver } from './user.resovler';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [UserResolver, UserService],
})
export class UserModule {}
