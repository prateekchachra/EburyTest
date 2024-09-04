import InvalidDevice from "../errors/invalidDevice.js";


export function verifyUserAgent(req, res, next) {
    const userAgent = req.headers['user-agent'];
    if (!userAgent.includes('EburyApp')) {
      const error = new InvalidDevice();
  
      throw new Error(error.message);
    }
    next();
  }
  