const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/myApp',(err, db) => {
  if (err) {
    return console.log('Could not connect to the mongodb server');;
  }
  console.log('connected to mongodb');

  db.collection('Todos').find().toArray().then((result)=>{
    console.log('result found');
    console.log(JSON.stringify(result, undefined,2));
  },(error)=>{
    console.log('Could not connect')
  });
});
