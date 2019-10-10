const express = require("express");
const routes = require("./routes");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes.home,)


mongoose.connect("3.15.85.16:27017/Anyang_db", { useMongoClient: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

  
function find() {
    
}

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);