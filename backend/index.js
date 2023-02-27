const express = require('express')
const dbConnect = require('./src/config/db');
const userRouter = require('./src/routes/user.routes');
require('dotenv').config();

const port = process.env.port  || 8080;

const server = express()

server.use(express.urlencoded({ extended: true }))

server.use(express.json())

server.use('/',userRouter);

server.listen(port, async() =>{ 
      try{
        await dbConnect();
        console.log(`http://localhost:${port}`)
      }catch(err){
        console.error(err);
      }
    })