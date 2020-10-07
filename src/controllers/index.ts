import CustomerController from './customer.controller'
import RegisterController from './register.controller'
import { customerService, registerService } from '../services'

const customerController = new CustomerController(customerService)
const registerController = new RegisterController(registerService)

const controllers = [
    customerController,
    registerController
]

export default controllers

export {
    customerController,
    registerController
}