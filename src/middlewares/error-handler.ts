import { Request, Response, NextFunction } from "express";
import { CustomError } from "../base-class/custom-base-error-class";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // If the error is not a instance of CustomError Base Class, then Console it for debugging purposes.
  console.error(err);

  res.status(400).send({
    errors: [{ message: err.message }],
  });
};
