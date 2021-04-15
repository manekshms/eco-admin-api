import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  productId!: string;

  @Column({ type: 'bigint' })
  categoryId!: number;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  description!: string;

  @Column({ type: 'varchar' })
  brand!: string;

  @Column({ type: 'varchar' })
  ecoRating!: string;

  @Column({ type: 'varchar' })
  packagingScore!: string;

  @Column({ type: 'varchar' })
  carbonFootprint!: number;

  @Column({ type: 'varchar' })
  isActive!: boolean;

  @Column({ type: 'varchar' })
  createdAt!: string;

  @Column({ type: 'varchar' })
  updatedAt!: string;
}
