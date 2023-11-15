import { CustomError } from "../base-class/custom-base-error-class";

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    // Calling the parent class constructor as this is a constructor of sub-class
    super("Not Authorized.");

    // Since we are extending a built-in class (Error) the following line of cade has to be added
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not Authorized." }];
  }
}
