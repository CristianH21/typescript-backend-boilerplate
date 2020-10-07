import { NextFunction, Request, Response } from "express";
import ApiError from "../models/api-error.model";
import RegisterService from "../services/register.service";

export default class RegisterController {

    constructor (private registerService: RegisterService) {}

    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body
            const result = await this.registerService.register(data)
            res.status(200).json(result)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}