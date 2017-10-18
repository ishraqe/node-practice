var mongoose = require('mongoose');
var validator = require('validator');


var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength:1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{value} is not a valid email'
    }
  },
  password:{
    type: String,
    required: true,
    minlength:6
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength:1
  },
  tokens:[{
    acess:{
      type: String,
      require: true
    },
    token:{
      type: String,
      require: true
    }
  }]
});

module.exports={User}
