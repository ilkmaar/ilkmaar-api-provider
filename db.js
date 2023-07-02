const mysql = require('mysql2');
const config = require('./db-config.json')

const connection = mysql.createConnection(config);
 
connection.connect((err) => {
    if (err) {
      console.log('Error connecting to database: ', err);
      return;
    }
    console.log('Connection established');
});

module.exports = connection;