import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'participants' })
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  city: string;

  @Column()
  background: string;
}
