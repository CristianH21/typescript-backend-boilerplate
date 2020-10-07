import { Document } from 'mongoose'
import DBConfig from "../config/db.config"
import Customer from '../models/customers'

export default class CustomerRepository {

    constructor (private dbConfig: DBConfig) {}

    findAll = async (): Promise<Document[] | undefined | string> => {
        try {
            await this.dbConfig.connect()
            const payload = await Customer.find()
            await this.dbConfig.disconnect()
            return new Promise( (resolve) => {
                resolve (payload)
            })
        } catch (error) {
            return new Promise( (reject) => {
                reject(error.message)
            })
        }
    }

}