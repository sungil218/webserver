const express = require("express");
const route = require("./route");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
import graphlHTTP from 'express-graphql';
const schema = require("./schema");


const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(routes.home,)


mongoose.connect("3.15.85.16:27017/Anyang_db")
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

  
function find() {
    
}

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.use(`/graphql`, graphlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, handleListening);