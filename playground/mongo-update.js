const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/myApp',(err, db) => {
  if (err) {
    return console.log('Could not connect to the mongodb server');;
  }
  console.log('connected to mongodb');

db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59e3a44a9a09f9200dbe8333')
  },{
  $set:{
    text: 'third things updated'
  }
  },{
    reutrnOriginal: false
  }).then((result)=>{
    console.log(result)
  });
});
