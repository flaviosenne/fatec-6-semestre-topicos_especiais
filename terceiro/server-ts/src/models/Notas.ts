import { NotasInterface } from './../interfaces/Notas';
import { model, Schema } from 'mongoose';

export default  model("notas", new Schema({
        ra: { type: Number, required: true },
        nome: { type: String, required: true },
        curso: { type: String, required: true },
        disciplina: { type: String, required: true },
        p1: { type: Number, required: true, default: 0 },
        p2: { type: Number, required: true,default: 0 },
        media: { type: Number, required: true, default: 0 }
    }), 'notas')
