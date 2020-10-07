import { Document } from 'mongoose'
import CustomerRepository from '../repositories/customer.repository'

export default class CustomerService {

    constructor (private customerRepository: CustomerRepository) {}

    getAddCustomers = async (): Promise<Document[] | string> => {
        try {
            const result = await this.customerRepository.findAll()
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