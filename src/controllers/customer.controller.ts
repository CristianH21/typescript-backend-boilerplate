import { NextFunction, Request, Response } from "express";
import ApiError from "../models/api-error.model";
import CustomerService from "../services/customer.service";

export default class CustomerController {

    constructor (private customerService: CustomerService) {}

    getCustomers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.customerService.getAddCustomers()
            res.status(200).json(result)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}