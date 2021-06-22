const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];

  if (!token) return res.status(401).send('Access Denied');

  jwt.verify(token, proccess.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(400).json({ message: 'Invalid Token', auth: false });
    } else {
      req.userID = decoded._id;
      next();
    }
  });
}

module.exports = verifyToken;
