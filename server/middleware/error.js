const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Cast wrong id error in MongoDB.
  if (err.name == "CastError") {
    const message = ` Invalid: ${err.path} 
        action not available.`;
    err = new ErrorHandler(message, 400);
  }

  // Solving Mongoose duplicate keys error :
  if (err.code == 11000) {
    const message = `Entered duplicate ${Object.keys(err.keyValue)}`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JSON Web Token errorSolving:
  if (err.name == "JsonWebTokenError") {
    const message = `Invalid token, try again`;
    err = new ErrorHandler(message, 400);
  }

  // Error Solving of JSON Web Token:
  if (err.name == "TokenExpireError") {
    const message = `Expired token, request again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
