import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  username: string

  @Column('text', {})
  address: string

  @Column('numeric', {})
  total: string

}
