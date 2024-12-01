import Joi from "joi";
import httpStatus from "http-status";
import { pick } from "../utils/pick.js";
import ApiError from "../utils/ApiError.js";

const validate = (schema ) => async (req, res, next) => {
  console.log("Validating request:", req.query); // Log the query params
  const { error, value } = schema.validate(req.query);

  if (error) {
    // If validation fails, return 400 with the error message
    console.log("Validation error:", error.details);
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    return res.status(httpStatus.BAD_REQUEST).json({
      message: errorMessage,
    });
  }

  return next();
};

export default validate;
