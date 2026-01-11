import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliverymanModule } from './deliveryman/deliveryman.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './deliveryman/constants';
import { DeliverymanController } from './deliveryman/deliveryman.controller';
import { DeliverymanService } from './deliveryman/deliveryman.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ebnu1721',
      database: 'deliveryman',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      
    }),
    DeliverymanModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
