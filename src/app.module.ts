import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { EnvConfiguration } from './config/app.config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivePreviewWsModule } from './live-preview-ws/live-preview-ws.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration]
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    // TypeOrmModule.forRoot({
    //   type: "postgres",
    //   host: "localhost",
    //   port: 5432,
    //   database: "postgres",
    //   username: "postgres",
    //   password: 'Pavon$31$32',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    AuthModule,
    OrderModule,
    LivePreviewWsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }