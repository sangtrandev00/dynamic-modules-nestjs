// user.module.ts
import { Module, DynamicModule } from '@nestjs/common';

@Module({})
export class UserModule {
    static register(options: { username: string; age: number }): DynamicModule {
        return {
            module: UserModule,
            providers: [
                {
                    provide: 'USER_INFO',
                    useValue: options,
                },
            ],
            exports: ['USER_INFO'],
        };
    }
}
