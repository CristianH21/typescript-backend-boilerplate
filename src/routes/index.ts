import RegisterRoute from './v1/register.route'
import customerRoute from './v1/customer.route'

const routers = [
    RegisterRoute,
    customerRoute
]

export default routers

export {
    RegisterRoute,
    customerRoute
}