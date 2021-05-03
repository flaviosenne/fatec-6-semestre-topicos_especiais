import "reflect-metadata";
import {createConnection} from "typeorm";
import {Photo} from "./entity/Photo";
import { Client } from "./entity/User";

createConnection().then(async connection => {
    let photo = new Photo()
    photo.name = 'Amazônia'
    photo.description = 'Amazônia legal'
    photo.fileName = 'amazonia.png'
    photo.views = 30
    photo.isPublished = true

    let client = new Client()
    client.age = 23,
    client.firstName = 'jose'
    client.lastName = 'antonio'
    client.photo = photo

    let clientRepository = connection.getRepository(Client)
    let photoRepository = connection.getRepository(Photo)

    await photoRepository.save(photo)
    await clientRepository.save(client)

    let clients = await clientRepository
    .createQueryBuilder('client')
    .innerJoinAndSelect('client.photo', 'photo')
    .getMany()

    console.log('client ', clients)

}).catch(error => console.log(error));
