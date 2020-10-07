import { Document } from 'mongoose'
import DBConfig from "../config/db.config"

export default class RegisterRepository {

    constructor (private dbConfig: DBConfig) {}

    create = async (): Promise<Document[] | undefined | string> => {
        try {
            await this.dbConfig.connect()
            //ADD CREATE NEW REGISTER
            await this.dbConfig.disconnect()
            return new Promise( (resolve) => {
                resolve ('created!')
            })
        } catch (error) {
            return new Promise( (reject) => {
                reject(error.message)
            })
        }
    }

}