import express from 'express'
import ValidateDTO from '../../middleware/validate-dto'
import { registerController } from '../../controllers'
import RegisterDTO from '../../dto/register.dto'

const router = express.Router()

router.post('/register', ValidateDTO.validate(RegisterDTO), registerController.register)

export default router