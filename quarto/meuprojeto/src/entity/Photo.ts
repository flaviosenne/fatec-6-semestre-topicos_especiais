import { Client } from './User';
import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from 'typeorm';


@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    fileName: string;

    @Column()
    description: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;

    @OneToOne(() => Client,client => client.photo)
    @JoinColumn()
    client: Client;
}
