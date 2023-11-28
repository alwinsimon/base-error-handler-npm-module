# base-error-handler  [![npm version](https://badge.fury.io/js/base-error-handler.svg)](https://www.npmjs.com/package/base-error-handler)

### base-error-handler is a simple Node.js module for handling errors in Express APIs written in TypeScript.

## Installation

```bash
npm install base-error-handler
```

## Features

- Custom error classes that extend a base `CustomError` class
- Automatic serialization of errors 
- Clean and consistent error handling
- Easy integration with Express
- Written in TypeScript

## Usage 

Import and add error handler middleware:

```ts
import express from "express";
import { errorHandler } from "base-error-handler";

const app = express();

app.use(errorHandler);
```

The `errorHandler` will catch errors, serialize the responses, and send proper error codes.

### Custom Errors

Throw custom errors from route handlers:

```ts 
import { NotFoundError } from "base-error-handler";

app.get("/", (req, res) => {
  throw new NotFoundError();
});
```

The `errorHandler` will catch it and handle sending the response.

## Custom Errors

base-error-handler includes common custom error classes:

- BadRequestError 
- NotAuthorizedError
- NotFoundError
- DatabaseConnectionError
- RequestValidationError

Extend the base `CustomError` class to create custom errors.

## Example App

```ts
import express from "express";
import { errorHandler, NotFoundError } from "base-error-handler";

const app = express();

app.get("/", (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!")
})
```

Any errors thrown will be caught by the error handler middleware.


## Contributing

Pull requests are welcome!  

Feel free to open issues or create pull requests for bugs and features.

## License  
This module is licensed under the MIT License - see the LICENSE file for details.