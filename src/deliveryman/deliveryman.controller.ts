import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Response } from 'express';
import { DeliverymanService } from './deliveryman.service';
import { CreateDeliverymanDto } from './dto/create-deliveryman.dto';
import { AuthGuard } from './auth.guard';

@Controller('deliveryman')
export class DeliverymanController {
  constructor(private readonly deliverymanService: DeliverymanService) { }

  // Register deliveryman
  @Post('register')
  register(@Body() deliverymanDto: CreateDeliverymanDto) {
    return this.deliverymanService.register(deliverymanDto);
  }

  // ✅ cookie-based login (same idea as your friend)
  @Post('login')
  login(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.deliverymanService.login(body.email, body.password, res);
  }

  // Example protected route (optional)
  @UseGuards(AuthGuard)
  @Get()
  getAllDeliverymen() {
    return this.deliverymanService.getAllDeliverymen();
  }
}






































// import { Body, Controller, Delete, Get, Param, Post, Put, Patch, Query, UsePipes, ValidationPipe,  BadRequestException,Request,Response } from '@nestjs/common';
// import { DeliverymanService } from './deliveryman.service';
// import { CreateDeliverymanDto } from './dto/create-deliveryman.dto';
// import { UpdateDeliverymanDto } from './dto/update-deliveryman.dto';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage, MulterError } from 'multer';
// import { UseGuards } from '@nestjs/common';
// import { AuthGuard } from './auth.guard';


// @Controller('deliveryman')
// export class DeliverymanController {
//   constructor(private readonly deliverymanService: DeliverymanService) {}

  
  // @UsePipes(new ValidationPipe())
  // @UseInterceptors(FileInterceptor('nidImage', {
  //   fileFilter: (req, file, cb) => {
  //     if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/)) {
  //       cb(null, true);
  //     } else {
  //       cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false)
  //     }
  //   },
  //   limits: {
  //     fileSize: 2000000
  //   },
  //   storage: diskStorage({
  //     destination: './uploads',
  //     filename: (req, file, cb) => {
  //       return cb(null, Date.now() + file.originalname)
  //     }
  //   })
    // }))
    
    
// @Post()
//  createDeliveryman(
//     @Body() deliverymanData: CreateDeliverymanDto
//   ) {
//     return this.deliverymanService.create(deliverymanData);
    
//   }
  //auth

 

//token verification

// Generate JWT token manually for a deliveryman
  // @Get('token/:username/:id')
  // generateToken(
  //   @Param('username') username: string,
  //   @Param('id') id: string
  // ) {
  //   const token = this.deliverymanService.generateToken(username, id);
  //   return { token };
  // }

  // createDeliveryman(
  //   @Body() deliverymanData: CreateDeliverymanDto
  // ): object {
  //   return this.deliverymanService.create(deliverymanData);
  // }



  

   // Deliveryman login
  // @Post('login')
  // async login(
  //   @Body() body: { email: string; password: string },
  // ): Promise<{ access_token: string }> {
  //   return this.deliverymanService.login(body.email, body.password);
  // }


  // @Get()
  // findAll() {
  //   return this.deliverymanService.getAll(); 
  // }

  // @Get(':email')
  // findOne(@Param('email') email: string) {
  //   return this.deliverymanService.getByEmail(email); 
  // }

  // @Get('byname/:substring')
  // getDeliverymanByFullNameSubstring(@Param('substring') substring: string) {
  //   return this.deliverymanService.getByFullNameSubstring(substring);
  // }

  // @Get(':username')
  // getDeliverymanByUsername(@Param('username') username: string):object {
  //   return this.deliverymanService.getByUsername(username);
  // }

  // Get deliveryman by ID (with vehicle and orders)
// @Get('id/:id')
// async getById(@Param('id') id: string) {
//   const deliveryman = await this.deliverymanService.getById(id);
//   if (!deliveryman) return { message: 'Deliveryman not found' };
//   return deliveryman;
// }







  // @Put(':username')
  // update(@Param('username') username: string, @Body() data: UpdateDeliverymanDto) {
  //   return this.deliverymanService.update(username, data);
  // }



 


  // @Patch(':email')
  // partialUpdate(@Param('email') email: string, @Body() data: UpdateDeliverymanDto) {
  //   return this.deliverymanService.update(email, data); 
  // }

  // @Delete(':username')
  // remove(@Param('username') username: string) {
  //   return this.deliverymanService.remove(username); 
  // }


  
  // @Delete('email/:email')
  // removeByEmail(@Param('email') email: string) {
  //   return this.deliverymanService.removeByEmail(email); 
  // }


  //for deliveryman vehicle creation

  // @Post(':deliverymanId/vehicle')
  // createVehicle(
  //   @Param('deliverymanId') deliverymanId: string,
  //   @Body() vehicleData: any
  // ) {
    
  //   const vehicleNumber: string = (vehicleData && vehicleData.vehicleNumber) || '';
  //   return this.deliverymanService.createVehicle(vehicleData, deliverymanId);
  // }



  // for order creation

//   @Post(':deliverymanId/order')
// createOrder(
//   @Param('deliverymanId') deliverymanId: string,
//   @Body() orderData: any
// ) {
//   return this.deliverymanService.createOrder(orderData, deliverymanId);
// }


// Get vehicle by deliverymanId
// @Get(':deliverymanId/vehicle')
// async getVehicle(@Param('deliverymanId') deliverymanId: string) {
//   const deliveryman = await this.deliverymanService.getById(deliverymanId);
//   if (!deliveryman) {
//     return { message: 'Deliveryman not found' };
//   }
//   return deliveryman.vehicle; // return vehicle entity
// }

// Get all orders by deliverymanId
// @Get(':deliverymanId/orders')
// async getOrders(@Param('deliverymanId') deliverymanId: string) {
//   const deliveryman = await this.deliverymanService.getById(deliverymanId);
//   if (!deliveryman) {
//     return { message: 'Deliveryman not found' };
//   }
//   return deliveryman.orders; // return array of orders
// }



// }
