import {NextFunction, Request,Response} from 'express'

export function isAuthenticated(
    req:Request,
    res:Response,
    next: NextFunction
){
    console.log("chamou esse middleware")
}