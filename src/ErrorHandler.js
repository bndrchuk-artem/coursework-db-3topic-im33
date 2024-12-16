export const databaseError = (message) => ({
  status: 500,
  message: `Database error: ${message}`,
});

export const validationError = (message) => ({
  status: 400,
  message: `Validation error: ${message}`,
});

export const notFound = (message) => ({
  status: 404,
  message: `Not Found: ${message}`,
});

export const genericError = (message) => ({
  status: 500,
  message: `Internal Server Error: ${message}`,
});

