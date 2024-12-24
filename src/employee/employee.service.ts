// user.service.ts
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    constructor(
        @Inject('EMPLOYEE_REPOSITORY') private readonly employeeRepository: string,
        @Inject('PROFILE_REPOSITORY') private readonly profileRepository: string,
    ) { }

    getRepositories(): string[] {
        return [this.employeeRepository, this.profileRepository];
    }
}