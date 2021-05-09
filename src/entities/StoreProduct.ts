import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './Product';
import { Store } from './Store';

@Entity('storeProducts')
export class StoreProduct extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  storeProductId!: string;

  @Column({ type: 'bigint' })
  storeId!: string;

  @JoinColumn({ name: 'storeId' })
  @ManyToOne(() => Store)
  store!: Store;

  @Column({ type: 'bigint' })
  productId!: string;

  @JoinColumn({ name: 'productId' })
  @ManyToOne(() => Product)
  product!: Product;

  @Column({ type: 'int' })
  distanceFromOrigin!: number;

  @Column({ type: 'boolean' })
  isActive!: boolean;

  @Column({ type: 'timestamp' })
  createdAt!: string;

  @Column({ type: 'timestamp' })
  updatedAt!: string;
}
