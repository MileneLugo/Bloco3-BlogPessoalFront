import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{
    public id: string
    public titulo: string
    public texto: string
    public usuario: User
    public data: Date
    public tema: Tema
}