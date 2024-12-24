import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingModule } from './greeting/greeting.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    GreetingModule.register('Chào mừng bạn đến với dynamic module ahihi'),
    UserModule.register({ username: 'kam', age: 20 }),
    EmployeeModule,
    DatabaseModule.forRoot({
      type: 'mysql',
      host: 'localhost',
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
