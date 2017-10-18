const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/myApp',(err, db) => {
  if (err) {
    return console.log('Could not connect to the mongodb server');;
  }
  console.log('connected to mongodb');

  db.collection('Todos').insertOne({
    text:'third thing to do',
    completed: true
  }, (err, result) => {
    if (err) {
      return console.log('something went wrong');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // db.collection('Users').insertOne({
  //   name: 'ish',
  //   age: 25,
  //   location: 'dhaka'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('something went wrong');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


});
