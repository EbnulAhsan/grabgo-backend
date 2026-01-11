import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('vehicle')
export class VehicleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicleNumber: string;

  @Column()
  type: string;
}
