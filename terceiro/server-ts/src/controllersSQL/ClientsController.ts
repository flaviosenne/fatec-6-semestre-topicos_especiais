import { Request, Response } from 'express';
import Pool from '../config/postgresql';

class ClientControllerSQL {
    get = async (req: Request, res: Response): Promise<Response> => {
        try {
            const data = await Pool.query('select * from clients')

            return res.status(200).json(data.rows)
        } catch (err) {
            return res.status(500).json({ msg: 'houve um erro na requisição' })
        }
    }

    save = async (req: Request, res: Response): Promise<Response> => {
        const {nome, cpf, rg, endereco} = req.body;

        try {
            const data = await Pool.
            query(`insert into clients(nome, cpf, rg, endereco)
            values($1, $2, $3, $4)`, [nome, cpf, rg, endereco])

            return res.status(201).json("cliente salvo "+data)

        } catch (err) {
            return res.status(500).json({ msg: 'houve um erro na requisição' })
        }
    }

   
}

export { ClientControllerSQL }