export const parseErrors = (err) => {
  // check if the error is a validaiton error
  if (err?.response?.data?.error?.name === 'ValidationError') {
    return {
      message: err.response.data.error.message,
      details: err.response.data.error.details.errors,
    }
  }

  // check if the error is a network error
  if (err?.message === 'Network Error') {
    return {
      message: "Unabel to connect to the server endpoint provided",
      details: []
    }
  }

  // check for forbidden errors
  if (err?.response?.status === 403) {
    return {
      message: "Your role does not have access to this resource",
      details: []
    }
  }

  // check for generic errors
  return {
    message: " An expceded error occurred. Please try again later",
  }
};