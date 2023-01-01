import { UserService } from './user.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.schema';
import { NotFoundException } from '@nestjs/common';

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

  @Query(() => User)
  getUser(@Args('id') id: number) {
    const user = this.userService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }
}
