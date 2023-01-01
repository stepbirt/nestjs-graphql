import { UserService } from './user.service';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.schema';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  helloWorld() {
    return this.userService.helloWorld();
  }

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }
}
