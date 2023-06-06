import express from 'express'
import Project from '../models/project.js';
import mongoose from 'mongoose';

function checkConnection() {
    const isConnected = mongoose.connection.readyState === 1;
    if (isConnected) {
      console.log('Connection to MongoDB established.');
    } else {
      console.log('Not connected to MongoDB. Establishing connection...');
      // You can add code here to handle the connection, such as calling `mongoose.connect()`
    }
  }
  

const router = express.Router();

//read
router.get('/project', async (req, res) => {

    res.send('Hello, this is auth endpoint!');
});



export default router;