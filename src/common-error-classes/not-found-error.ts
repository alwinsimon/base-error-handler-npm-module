import { CustomError } from "../base-class/custom-base-error-class";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    // Calling the parent class constructor as this is a constructor of sub-class
    super("Not Found Error.");

    // Since we are extending a built-in class (Error) the following line of cade has to be added
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: "Oops, Requested Resource NOT FOUND." }];
  }
}
