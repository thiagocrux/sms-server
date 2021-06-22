const mongoose = require('mongoose');

function database() {
  mongoose
    .connect(process.env.DATABASE_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log('[database] running on mongo atlas');
    });
}

module.exports = database;
