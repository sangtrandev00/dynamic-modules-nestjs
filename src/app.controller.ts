import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('greet')
  getGreeting(): string {
    return this.appService.getHello();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): { username: string; age: number } {
    return this.appService.getUserInfo();
  }
}
