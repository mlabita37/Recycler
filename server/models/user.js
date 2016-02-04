var mongoose = require('mongoose');
var bcrypt   = require('bcryptjs');
var crypto   = require('crypto');

var UserSchema = mongoose.Schema({
  username: {type: String},
  password: {type: String},
  token: {type: String}
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
