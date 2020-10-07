import DBConfig from '../config/db.config'
import CustomerRepository from './customer.repository'
import RegisterRepository from './register.repository'

const dbConfig = new DBConfig()

const customerRepository = new CustomerRepository(dbConfig)
const registerRepository = new RegisterRepository(dbConfig)

const repositories = [
    customerRepository,
    registerRepository
]

export default repositories

export {
    customerRepository,
    registerRepository
}