import { CustomError } from "../base-class/custom-base-error-class";
import { ValidationError } from "express-validator";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    // Calling the parent class (Error) constructor as this is a constructor of sub-class
    super("Invalid Login Parameters.");

    // Since we are extending a built-in class (Error) the following line of code has to be added
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    const errorsArray = this.errors.map((error) => {
      if (error.type === "field") {
        return { message: error.msg, field: error.path };
      }

      return { message: error.msg };
    });

    return errorsArray;
  }
}
