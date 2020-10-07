import CustomerService from './customer.service'
import RegisterService from './register.service'
import { customerRepository, registerRepository } from '../repositories'


const customerService = new CustomerService(customerRepository)
const registerService = new RegisterService(registerRepository)

const services = [
    customerService,
    registerService
]

export default services

export {
    customerService,
    registerService
}