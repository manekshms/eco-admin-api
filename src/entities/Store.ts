import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stores')
export class Store extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  storeId!: string;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  address!: string;

  @Column({ type: 'varchar' })
  location!: string;

  @Column({ type: 'varchar' })
  phoneNumber!: string;

  @Column({ type: 'varchar' })
  website!: string;

  @Column({ type: 'boolean' })
  isActive!: boolean;

  @Column({ type: 'timestamp' })
  updatedAt!: string;

  @Column({ type: 'timestamp' })
  createdAt!: string;
}
