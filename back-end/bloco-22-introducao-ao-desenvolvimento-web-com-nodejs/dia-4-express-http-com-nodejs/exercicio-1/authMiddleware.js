module.exports = (req, res, next) => {
try {
  const { authorization } = req.headers;

  if(!authorization || authorization.lenght !== 16) {
    return res.status(401).json({ message: `token invalido ${authorization}` });
  }

    return next();
  } catch (err) {
    return res.status(500).end();
  }
}