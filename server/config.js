const path = require('path');

const config = {
  github : {
    api : 'https://api.github.com/repos',
    clientId : "423335fdf206466ccd3b",
    clientSecret : "bc10a999efc0335d06b6d84d470b76eda5a97b30",
    userAgent: 'cadeban'
  },
  mongoose: {
    mlab : 'mongodb://heroku_t6bgld7d:djaugs28vumrah1ech7pgnhved@ds047146.mlab.com:47146/heroku_t6bgld7d'
  }
};

module.exports = config;