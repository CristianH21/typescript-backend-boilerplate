import { NextFunction, Request, Response } from "express";
import ApiError from '../models/api-error.model'

class ErrorHandler {

    handle (error: any, req: Request, res: Response, next: NextFunction) {
        if (error instanceof ApiError) {
            return res.status(error.status).json(error.message)
        }
        return res.status(500).json('Parece que algo salió mal!')
    }
    
}

export default new ErrorHandler()