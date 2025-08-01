const validKeys = require('../keys.json');

module.exports = function (req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || !validKeys[apiKey]) {
    return res.status(403).json({ error: 'Invalid or missing API key' });
  }

  next();
};
