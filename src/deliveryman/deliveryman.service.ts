import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

import { CreateDeliverymanDto } from './dto/create-deliveryman.dto';
import { DeliverymanEntity } from './deliveryman.entity';

@Injectable()
export class DeliverymanService {
  constructor(
    @InjectRepository(DeliverymanEntity)
    private readonly deliverymanRepository: Repository<DeliverymanEntity>,
    private readonly jwtService: JwtService,
  ) { }

  // ✅ Register deliveryman
  async register(deliverymanDto: CreateDeliverymanDto) {
    const { email, password, firstName, lastName, phoneNumber, dateOfBirth } = deliverymanDto;

    const existing = await this.deliverymanRepository.findOne({ where: { email } });
    if (existing) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const deliveryman = this.deliverymanRepository.create({
      firstName,
      lastName,
      dateOfBirth,
      email,
      password: hashedPassword,
      phoneNumber,

    });

    await this.deliverymanRepository.save(deliveryman);

    return {
      message: 'Registration successful',
      success: true,
    };
  }

  // ✅ cookie-based login (same idea as your friend)
  async login(email: string, password: string, res: Response) {
    const user = await this.deliverymanRepository.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException('Invalid email or password');
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      throw new BadRequestException('Invalid email or password');
    }

    const payload = { id: user.id, email: user.email };
    const access_token = await this.jwtService.signAsync(payload);

    res.cookie('access_token', access_token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      sameSite: 'lax',
    });

    return { access_token };
  }

  // ✅ Get all deliverymen
  async getAllDeliverymen() {
    const deliverymen = await this.deliverymanRepository.find();
    return { success: true, data: deliverymen };
  }
}
