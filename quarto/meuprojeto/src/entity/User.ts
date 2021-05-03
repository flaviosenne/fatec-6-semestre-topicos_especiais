import { Photo } from './Photo';
import { Column, PrimaryGeneratedColumn, Entity, OneToOne } from 'typeorm';


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

    @OneToOne(() => Photo, photo => photo.client)
    photo: Photo 
}
