import { Document } from 'mongoose';
import { NotasInterface } from './../interfaces/Notas';
import { Request, Response } from 'express';
import Notas from '../models/Notas';

class NotasController {
    get = async (req: Request, res: Response) => {
        const data: Document<NotasInterface>[] = await Notas.find()
        res.json(data)
    }
}

export { NotasController }