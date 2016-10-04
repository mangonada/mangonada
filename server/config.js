const path = require('path');

const config = {
  github : {
    api : 'https://api.github.com/repos',
    clientId : "423335fdf206466ccd3b",
    clientSecret : "bc10a999efc0335d06b6d84d470b76eda5a97b30",
    userAgent: 'cadeban'
  },
  mongoose: {
    mlab : 'mongodb://heroku_g2lr0w22:vimvpcqss7ql767rae97k1p433@ds047166.mlab.com:47166/heroku_g2lr0w22'
    // mlab : 'mongodb://heroku_t6bgld7d:djaugs28vumrah1ech7pgnhved@ds047146.mlab.com:47146/heroku_t6bgld7d'
  }
};

config.github.secrets = `client_id=${config.github.clientId}&client_secret=${config.github.clientSecret}`;

module.exports = config;