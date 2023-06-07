import express from 'express'
import User from '../models/User.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import loginLimiter from '../middlewares/loginLimiter.js'
import createSecretToken from "../util/SecretToken.js";
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', loginLimiter, async (req, res) => {
  try{
    if (mongoose.connection.readyState !== 1) {
      throw new Error('Not connected to MongoDB');
    }

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    })

    const user = await newUser.save();
    
    const token = createSecretToken(user._id);

    const { password, ...other} = user._doc;


    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    res.status(200).cookie("jwtToken", token, {
      expires,
      path: '/',
      sameSite: 'none',
      httpOnly: true,
      secure: true
    }).json(other);

  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
})

router.post('/login', loginLimiter, async (req, res) => {

    const user = await User.findOne({email: req.body.email});

    if (!user) {
      return res.status(401).json('No user found')
    }else{

      const valid = await bcrypt.compare(req.body.password, user.password);

      if(valid){

        const { password, ...other} = user._doc;

        const token = createSecretToken(user._id);

        const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        res.cookie('jwtToken', token, {
          expires,
          path: '/',
          sameSite: 'none',
          httpOnly: true,
        secure: true });
        res.status(200).json(other);
      }else{
        return res.status(401).json('Invalid Password')
      }
    }

})

router.get('/authStatus', (req, res) => {
  const token = req.cookies.jwtToken;

  console.log(token);

  if (!token) {
    // No token found, indicating the user is not logged in
    return res.json({ loggedIn: false, tokenVerified: false });
  }

  // Verify and decode the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decodedToken) => {
    if (err) {
      // Invalid token, indicating the user is not logged in
      return res.json({ loggedIn: false, tokenVerified: false });
    }

    // Retrieve the user data associated with the token
    const user = await User.findById(decodedToken.id);

    // Return the decoded token, user data, and loggedIn status in the response
    res.json({ token: decodedToken, user, loggedIn: true, tokenVerified: true });
  });
});

router.get('/logout', (req, res) => {
  // Set token to none and expire after 5 seconds
  console.log('logout attempt')
  res.clearCookie('jwtToken', { httpOnly: true, path: '/', secure:true }).status(200).send('Logged out successfully');

}
)

router.put('/:id', async (req,res) => {
  if(req.body.userId === req.params.id){
    if(req.body.password){
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt)
    }

    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body
        },{
          new: true,
        })

        res.status(200).json(updateUser);
    }catch(err){
      console.log(err);
    }
  }
})

router.get('/:id', async (req,res) => {
  try{
    const user = await User.findById(req.params.id);
    const {password, ...other} = user._doc;
    res.status(200).json(other);
  }catch(err){
    res.status(500).json("No User found!");
  }
})

export default router;