import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { Client } from './clients.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  city: string;

  @Column()
  identity: number;

//   @ManyToOne(() => Client, (client) => client.users)
//   client: Client;
}