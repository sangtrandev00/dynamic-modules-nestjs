// database.module.ts
import { Module, DynamicModule } from '@nestjs/common';

@Module({})
export class DatabaseModule {
    static forRoot(options: { type: string; host: string }): DynamicModule {
        console.log("database connection");
        const providers = [
            {
                provide: 'DATABASE_CONNECTION',
                useValue: `Kết nối ${options.type} tại ${options.host}`,
            },
        ];

        return {
            module: DatabaseModule,
            providers: providers,
            exports: providers,
        };
    }

    static forFeature(entities: string[]): DynamicModule {
        const providers = entities.map((entity) => ({
            provide: `${entity.toUpperCase()}_REPOSITORY`,
            useValue: `${entity} repository`,
        }));
        console.log("providers", providers);
        return {
            module: DatabaseModule,
            providers: providers,
            exports: providers,
        };
    }
}
