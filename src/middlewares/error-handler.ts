import { Request, Response, NextFunction } from "express";
import { CustomError } from "../base-class/custom-base-error-class";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Check if the error is an instance of custom error class.
  if (err instanceof CustomError) {
    // If it is, handle it by sending a response with the serialized errors and the specified status code.
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // The below line of code will capture the statusCode in errors,
  // IF they are thrown by error handlers in base-auth-handler module.
  // It'll try accessing the statusCode property of the error considering it as a instance of CustomError,
  // If it dosen't exist, it'll default to 400 (Bad Request).
  const statusCode = (err as CustomError)?.statusCode || 400;

  if (!(err as CustomError)?.statusCode){

    // If err.statusCode does not exist,
    // The error is not an instance of custom error class.
    // Log it for debugging purposes.
    console.error(err);

  }

  // Send a response with the error message and the determined status code.
  res.status(statusCode).send({
    errors: [{ message: err.message }],
  });
};
