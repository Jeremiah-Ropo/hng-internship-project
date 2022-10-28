import { response, Response } from 'express';

response.customSuccess = function (statusCode : number,payload : { message?: string, data?: any}): Response {
  return this.status(statusCode).json({message : payload?.message, data: payload?.data });
};
