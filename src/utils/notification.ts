import { Request,Response, NextFunction } from "express";
import axios, {AxiosInstance} from "axios";

export const notification = async (req:Request, res:Response, next:NextFunction) => {
    let request : AxiosInstance = axios.create({
        headers:{'X-Tenant-Id' : "whowhowho"},
        responseType: 'json'
    })

    let response = await request.get("who")
    if(response.data['error']){
        throw new Error(response.data["error"][0]["message"])
    }
}   