const express = require ('express');

const app = express();

const mongoose = require ('mongoose');

const Location = require('./location')

   
      connect('mongodb+srv://ijawpikin:1993200214To@cluster0.0fldv9j.mongodb.net/locale-api', {
useNewUrlParser: true, useUnifiedTopology: true     
   }) 

   .then (() => {
     
    console.log ('mongodb connection');

   })

   .catch((err) => {
    console.log(err);
   });
     
