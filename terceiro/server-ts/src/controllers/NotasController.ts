import { Document } from 'mongoose';
import { NotasInterface } from './../interfaces/Notas';
import { Request, Response } from 'express';
import Notas from '../models/Notas';

class NotasController {
    get = async (req: Request, res: Response) => {
        try {
            const data: Document<NotasInterface>[] = await Notas.find()

            return res.status(200).json(data)
        } catch (err) {
            return res.status(500).json({ msg: 'houve um erro na requisição' })
        }
    }

    save = async (req: Request, res: Response) => {
        const notas: NotasInterface = req.body;

        console.log(req.body)

        try{
            const data: Document<NotasInterface> = await Notas.create(notas)
        
            return res.status(201).json(data)

        }catch (err) {
            return res.status(500).json({ msg: 'houve um erro na requisição' })
        }
    }
}

export { NotasController }