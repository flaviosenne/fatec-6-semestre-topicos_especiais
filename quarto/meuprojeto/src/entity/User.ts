import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';


@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
