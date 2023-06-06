import User from '../models/User.js'
import dotenv from 'dotenv'

dotenv.config();

import jwt from 'jsonwebtoken'

const userVerification = (req, res, next) => {
  const token = req.cookies.jwtToken;
  console.log(token);
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data._id);
      console.log(user);
      next();
    }
  })
}

export default userVerification