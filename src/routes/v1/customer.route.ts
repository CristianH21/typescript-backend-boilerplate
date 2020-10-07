import express from 'express'
import { customerController } from '../../controllers'

const router = express.Router()

router.get('/customers', customerController.getCustomers)

export default router