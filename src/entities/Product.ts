import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Category } from './Category';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  productId!: string;

  @Column({ type: 'bigint' })
  categoryId!: string;

  @JoinColumn({ name: 'categoryId' })
  @ManyToOne(() => Category)
  category!: Category;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  description!: string;

  @Column({ type: 'varchar' })
  brand!: string;

  @Column({ type: 'varchar' })
  imageName!: string;

  @Column({ type: 'varchar' })
  ecoRating!: string;

  @Column({ type: 'varchar' })
  packaging!: string;

  @Column({ type: 'varchar' })
  carbonFootprint!: number;

  @Column({ type: 'varchar' })
  isActive!: boolean;

  @Column({ type: 'varchar' })
  createdAt!: string;

  @Column({ type: 'varchar' })
  updatedAt!: string;
}
