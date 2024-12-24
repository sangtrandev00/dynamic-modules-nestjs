import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module'
import { EmployeeService } from './employee.service'
import { EmployeeController } from './employee.controller';

@Module({
    imports: [
        DatabaseModule.forFeature(['employee', 'profile']),
    ],
    providers: [EmployeeService],
    controllers: [EmployeeController],
    exports: [EmployeeService],
})
export class EmployeeModule { }