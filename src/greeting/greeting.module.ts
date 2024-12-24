// greeting.module.ts
import { Module, DynamicModule } from '@nestjs/common';

@Module({})
export class GreetingModule {
    static register(greetingMessage: string): DynamicModule {
        console.log("gretting message", greetingMessage);
        return {
            module: GreetingModule,
            providers: [
                {
                    provide: 'GREETING_MESSAGE',
                    useValue: greetingMessage,
                },
            ],
            exports: ['GREETING_MESSAGE'],
        };
    }
}
