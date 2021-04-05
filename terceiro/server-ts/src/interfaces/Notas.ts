import {Document} from 'mongoose'

export interface NotasInterface extends Document{
    ra: number
    nome: string
    curso: string
    disciplina: string
    p1: number
    p2: number
    media: number
}