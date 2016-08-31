'use strict';

/**
* Module dependencies
*/

require('dotenv').config();

const mongoose = require('mongoose');
const config = require('./config');

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
   .on('open', () => {
      console.log(`We are connected to mongo port ${port}-- ${config.db}`);
   });
