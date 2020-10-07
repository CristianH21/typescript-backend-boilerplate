import { Document } from 'mongoose'
import RegisterRepository from "../repositories/register.repository"

export default class RegisterService {

    constructor (private registerRepository: RegisterRepository) {}

    register = async (data: any): Promise<Document[] | string> => {
        try {
            // ADD REPOSITORY HERE
            const result = data
            return new Promise( (resolve) => {
                resolve(result)
            })
        } catch (error) {
            return new Promise( (reject) => {
                reject(error.message)
            })
        }
    }
}