import Joi from 'joi';

export const schemaAutoSuggest = Joi.object().keys({
    cityName: Joi.string()
      .pattern(/^[A-Za-z]+$/) // Only alphabetic characters
      .min(0)
      .max(30)
      .optional() // Make it optional if it is not required
      .messages({
        'string.base': 'cityName should be a type of string',
        'string.pattern.base': 'cityName must contain only alphabetic characters (A-Z, a-z)',
        'string.empty': 'cityName cannot be empty', // Optional, if you want to validate empty values
      }),

    region: Joi.string()
      .min(2)
      .max(5)
      .required()
      .messages({
        'string.base': 'region should be a type of string',
        'any.required': 'region is a required field'
      })
});
