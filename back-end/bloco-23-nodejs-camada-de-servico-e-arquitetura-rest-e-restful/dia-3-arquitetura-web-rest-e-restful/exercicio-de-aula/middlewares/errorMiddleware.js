module.exports = {
  errorMiddleware: (error, req, res, _next) => {
    if (error.status) {
      return res.status(error.status).json(error.message);
    }

    return res.status(500).json({ message: 'Internal Server Error'});
  }
};