const express = require('express');
const mongodb = require('mongodb');

const app = express();
const port = 3000;


const uri = 'mongodb://localhost:27017/mydatabase';


const MongoClient = mongodb.MongoClient;


MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  
  const db = client.db('mydatabase');
  console.log('Connected to MongoDB');

 
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
