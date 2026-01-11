import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('deliveryman')
export class DeliverymanEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  dateOfBirth: string;

  @Column()
  password: string;
}
