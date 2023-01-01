import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  helloWorld(): string {
    return 'hello world';
  }
}
