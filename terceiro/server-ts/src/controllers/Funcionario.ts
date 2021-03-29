import { Request, Response } from 'express';
class Funcionario {
    get = async (req: Request, res: Response) => {
        res.json("Funcionário")
    }
}

export { Funcionario }