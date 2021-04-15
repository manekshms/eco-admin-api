import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('storeProducts')
export class StoreProduct extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  storeProductId!: string;

  @Column({ type: 'bigint' })
  storeId!: string;

  @Column({ type: 'bigint' })
  productId!: string;

  @Column({ type: 'int' })
  distanceFromOrigin!: number;

  @Column({ type: 'boolean' })
  isActive!: boolean;

  @Column({ type: 'timestamp' })
  createdAt!: string;

  @Column({ type: 'timestamp' })
  updatedAt!: string;
}
