
////////////////////////////////////////////////////////////////
/// models, schema
var config = require('./config');
var chalk = require('chalk');
var mongoose = require('mongoose');
var q = require('q');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

mongoose.Promise = q.Promise; // NOTE: original mongoose.mpromise is deprecated

var UserSchema = Schema({
  username: { type: String, required: false },
  email: { type: String, required: false },
  password: { type: String, required: false },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

var GithubDataSchema = Schema({
  id : String, // "user/repo"
  repo : {
    type: String,
    get: function(data) {
      try {
        return JSON.parse(data);
      } catch(err) {
        return data;
      }
    },
    set: function(data) {
      return JSON.stringify(data);
    }
  },
  branches : { // JSONBranches : []
    type: String,
    get: function(data) {
      try {
        return JSON.parse(data);
      } catch(err) {
        return data;
      }
    },
    set: function(data) {
      return JSON.stringify(data);
    }
  },
  commits : { // JSONCommits : []
    type: String,
    get: function(data) {
      try { 
        return JSON.parse(data);
      } catch(err) { 
        return data;
      }
    },
    set: function(data) {
      return JSON.stringify(data);
    }
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

var userSequence = require('mongoose-sequence');
UserSchema.plugin(userSequence, { 'inc_field': 'userId' });

var models = {
  User : mongoose.model('User', UserSchema),
  GithubData : mongoose.model('GithubData', GithubDataSchema),
};

crudify_models();
module.exports = models;// new Promise(crudify_models).then((models) => { return Promise.resolve( models)});;

// functions

function crudify_models() {

  mongoose.connection.on('connected', connected);
  mongoose.connection.on('disconnected', disconnected);
  mongoose.connection.on('error', error);
  mongoose.connection.once('open', ready);
  var db = mongoose.connect(config.mongoose.mlab);
  var mlab = chalk.blue(config.mongoose.mlab);

  function ready() {
    console.log("mongoose ready!");
  }

  function connected() {
    console.log(chalk.green('OK'), chalk.yellow('connected'), 'mongoose server', mlab);
  }

  function disconnected() {
    console.log(chalk.green('OK'), chalk.yellow('disconnected'), 'mongoose server', mlab);
  }

  function error() {
    console.log(chalk.red('NO'), chalk.yellow('error'), 'mongoose server', mlab);
  }
}


