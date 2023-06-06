import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

dotenv.config();

const createSecretToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1d',
    });

};

export default createSecretToken