const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    const response = {
      success: false,
      message: err.message || 'Internal Server Error',
      stack: err.stack,
    };

    return res.status(500).json(response);
  });
};

export default asyncHandler;
