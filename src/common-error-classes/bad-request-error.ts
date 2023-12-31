import { CustomError } from "../base-class/custom-base-error-class";

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(message: string) {
    // Calling the parent class constructor as this is a constructor of sub-class
    super(message);

    // Since we are extending a built-in class (Error) the following line of code has to be added
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
