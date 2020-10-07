import { NextFunction, Request, Response } from "express";
import ApiError from '../models/api-error.model'

class ValidateDTO {
    validate(schema: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                const validateBody = await schema.validate(req.body)
                req.body = validateBody
                next()
            } catch (error) {
                next(ApiError.badRequest(error.message))
            }
        }
    }
}

export default new ValidateDTO()