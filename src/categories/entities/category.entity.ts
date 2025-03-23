import { Exclude } from 'class-transformer';
import { StatusEnum } from 'src/enums/status.enum';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ name: 'categories_id', nullable: true })
  categories_id: number;

  @Column({ name: 'users_id', nullable: true })
  users_id: number;

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.ACTIVE })
  status: StatusEnum;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  @Exclude()
  deleted_at: Date | null;

  @ManyToMany(() => Category, (category) => category.categories_id)
  categories: Category[];

  @OneToMany(() => User, (user) => user.id)
  user: User;
}
