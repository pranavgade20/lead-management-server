//MongoDB
const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database and Collection Names
const dbName = 'test';
const collectionName = 'userDocs';

//variables storing the db object(for closing/opening connection, etc
let database;
// collection object(for writing/reading/deletion, etc)
let collection;

//P.S.: go to the end of the file for details about implementation
// Use connect method to connect to the server
mongoClient.connect(url, (err, dbObj) => {
   assert.equal(null, err);
   console.log("Connected to mongo server.");

   collection = dbObj.db(dbName).collection(collectionName);
   database = dbObj;
});

// Server
const express = require('express');
const bodyParser = require("body-parser");
const server = express();
const http = require('http').Server(server);
const io = require('socket.io')(http);

server.use(bodyParser.urlencoded({ extended: true }));

server.use('/', express.static(__dirname + "/public/"));
server.use('/node_modules', express.static(__dirname + "/node_modules/"));

server.post('/api/setUser', (req, res) => {
   let id = 1;
   collection.find({_id : 0}).toArray((err, doc) => {
      assert.equal(err, null);
      id = doc[0].token + 1;
   });

   collection.insertOne({
      _id : id,
      token : req.body.token,
      username : req.body.username,
      phoneNumber : req.body.phoneNumber,
      occupation : req.body.occupation,
      isUser : req.body.isUser
   }, (err, r) => {
      assert.equal(null, err);
   });

   collection.replaceOne({ }, {
      _id : 0,
      text : id
   });
   res.send('success');
})

server.post('/api/calls', (req, res) => {
  const number = req.body.number;
  let status;
  switch (req.body.status) {
    case '0':
      status = 'started';
      break;
    case '1':
      status = 'stopped';
      break;
    case '2':
      status = 'paused';
      break;
    case '3':
      status = 'resumed';
      break;
    default:
      res.status(400).send('Invalid status');
      return;
  }
  io.emit('call status change', {
    number,
    status
  });
  res.send('Emitted message');
});

io.on('connection', (socket) => {
  console.log(`${socket.id} connected.`);
  socket.on('disconnect', () => console.log(`${socket.id} disconnected.`));
});

http.listen(4000, () => {
  console.log('Listening on port 4000');
})

//Implementation of the connection to mongoDB:
//the first element in the collection keeps track of how many
//elements are stored in the collection.
//the elements start from _id=1 to _id=<the value in zeroth element>
//
//So, while initialising the DB, please manually add an element 
//to the start of the mongo database.
//command in mongo shell:
//use <dbName>
//db.<collectionName>.insert({"_id":0, "token":"0"})