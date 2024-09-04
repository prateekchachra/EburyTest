import HttpStatus from "http-status-codes";

import BaseError from "./base.js";

class InvalidDevice extends BaseError {
  statusCode = HttpStatus.UNAUTHORIZED;

  constructor(message = "Invalid Device. Please access via mobile.", errorCode = "INVALID_DEVICE") {
    super(message, errorCode);
  }
}

export default InvalidDevice;