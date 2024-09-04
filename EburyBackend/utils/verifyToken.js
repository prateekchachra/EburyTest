import InvalidApiToken from "../errors/invalidApiToken.js";

export function verifyToken(req, res, next) {
  const token = process.env.API_TOKEN;
  const authToken = req.headers['authorization'];
  const tokenFromHeader = authToken.split('Bearer ')[1];

  if (!tokenFromHeader || tokenFromHeader!== token) {
    const error = new InvalidApiToken();

    throw new Error(error.message);
  }

  next();
}
