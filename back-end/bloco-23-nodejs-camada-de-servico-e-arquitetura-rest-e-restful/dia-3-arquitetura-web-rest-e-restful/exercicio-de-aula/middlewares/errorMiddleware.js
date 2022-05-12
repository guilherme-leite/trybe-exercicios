module.exports = {
  errorMiddleware: (error, req, res, _next) => {
    return res.status(500).json({ message: 'Internal Server Error'});
  }
};