import { UserResolver } from './user.resovler';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [UserResolver],
})
export class UserModule {}
