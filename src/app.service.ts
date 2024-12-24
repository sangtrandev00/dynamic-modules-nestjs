import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(
    @Inject('GREETING_MESSAGE') private readonly greetingMessage: string,
    @Inject('USER_INFO') private readonly userInfo: { username: string; age: number },
  ) { }

  getHello(): string {
    return this.greetingMessage;
  }

  getUserInfo(): { username: string; age: number } {
    return this.userInfo;
  }
}
