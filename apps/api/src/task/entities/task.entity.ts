import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  content: string;
  @Column({ default: false })
  done: boolean;
}
