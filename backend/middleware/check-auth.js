const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {
  console.log("started")
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    console.log("token")
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error('Authentication failed!');
    }
    const decodedToken = jwt.verify(token, 'supersecret_dont_share');
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    console.log(err)
    const error = new HttpError('Authentication failed!', 401);
    return next(error);
  }
};
