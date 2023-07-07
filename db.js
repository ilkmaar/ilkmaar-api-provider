const mysql = require('mysql2');

// const config = require('./db-config.json')
// const connection = mysql.createConnection(config);

const config = {
  "user": process.env.DB_USER, // e.g. 'my-db-user'
  "password": process.env.DB_PASS, // e.g. 'my-db-password'
  "database": process.env.DB_NAME, // e.g. 'my-database'
  "port": 3306,
  "namedPlaceholders": true
}

// Running from Google Cloud?
if(process.env.NODE_ENV === 'production') {
  console.log('Running from cloud. Connecting to DB through GCP socket.');
  config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
} else {
  console.log('Running from localhost. Connecting to DB directly.');
  config.host = process.env.HOST;
}

// switching to environmental variables to set up for app engine deploy
const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) {
      console.log('Error connecting to database: ', err);
      return;
    }
    console.log('Connection established');
});

module.exports = connection;