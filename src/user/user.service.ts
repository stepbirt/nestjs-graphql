import { Injectable } from '@nestjs/common';
import { JsonPlaceholderService } from 'src/json-placeholder/json-placeholder.service';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    private readonly jsonPlaceHolderService: JsonPlaceholderService,
  ) {}

  helloWorld(): string {
    return 'hello world';
  }

  async getUsers(): Promise<User[]> {
    const response = await this.jsonPlaceHolderService.getUsers();
    return response.data;
  }

  async findOneById(id): Promise<User> {
    const response = await this.jsonPlaceHolderService.getUser(id);
    return response.data;
  }
}
