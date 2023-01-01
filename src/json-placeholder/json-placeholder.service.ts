import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { User } from 'src/user/user.schema';

@Injectable()
export class JsonPlaceholderService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com';

  getUsers() {
    return axios.get<User[]>(`${this.serviceUrl}/users`);
  }
}
