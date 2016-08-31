'use strict';

/**
* Module dependencies
*/

require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');

const config = require('./config');

const app = express();
const connection = connect();

const port= process.env.PORT || 3000;

/*
* Expose
*/
 module.export={
    connection
};

function connect(){
   var options= {
      server: {
         socketOptions: {
            keepAlive: 1
         }
      }
   };
   var connection = mongoose.connect(config.db, options).connection;
   return connection;
}

connection
   .on('error', console.log)
   .on('disconnected', connect)
   .on('open', listen)


function listen(){
   console.log(`Connection open to ${config.db}`)
   app.listen(port, () => {
      console.log(`app listening on port ${port}`)
   })
}
