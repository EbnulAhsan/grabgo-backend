import { Module } from '@nestjs/common';
import { DeliverymanController } from './deliveryman.controller';
import { DeliverymanService } from './deliveryman.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliverymanEntity } from './deliveryman.entity';
import { VehicleEntity } from './vehicle.entity';
// import { OrderEntity } from './orders.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from'./constants';
    


@Module({
  imports: [TypeOrmModule.forFeature([DeliverymanEntity, VehicleEntity, ]), JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '1h' },
  })],
  controllers: [DeliverymanController],
  providers: [DeliverymanService],
})
export class DeliverymanModule {} 

  