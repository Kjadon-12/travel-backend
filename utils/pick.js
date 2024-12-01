export const pick = (object, keys) => {
    return keys.reduce((result, key) => {
      if (object[key]) {
        result[key] = object[key];
      }
      return result;
    }, {});
  };
  