import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customerItems')
export class CustomerItem extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  customerItemId!: string;

  @Column({ type: 'bigint' })
  productId!: string;

  @Column({ type: 'timestamp' })
  createdAt!: string;

  @Column({ type: 'timestamp' })
  updatedAt!: string;
}
