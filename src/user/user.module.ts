import { UserResolver } from './user.resovler';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { JsonPlaceholderService } from 'src/json-placeholder/json-placeholder.service';

@Module({
  imports: [],
  providers: [UserResolver, UserService, JsonPlaceholderService],
})
export class UserModule {}
