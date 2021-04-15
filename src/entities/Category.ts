import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  categoryId!: string;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  description!: string;

  @Column({ type: 'boolean' })
  isActive!: boolean;

  @Column({ type: 'timestamp' })
  createdAt!: string;

  @Column({ type: 'timestamp' })
  updatedAt!: string;
}
