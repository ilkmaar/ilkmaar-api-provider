const express = require('express');
const router = express.Router();
const connection = require('../../db');
const metadata = require('./metadata.js');
const queries = require('./queries.js');


router.get('/cookBook', (req, res) => {
    connection.query(queries['/cookBook'], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while querying the database' });
      }
      res.json(results);
    });
});

router.get('/goodCookBook', (req, res) => {
    connection.query(queries['/goodCookBook'], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while querying the database' });
      }
      res.json(results);
    });
});

router.get('/cauldronManual', (req, res) => {
    connection.query(queries['/cauldronManual'], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while querying the database' });
      }
      res.json(results);
    });
});


//
//
// METADATA ROUTES
//
//

router.get('/cookBook/metadata', (req, res) => {
    res.json(metadata['/cookBook']);
});
router.get('/goodCookBook/metadata', (req, res) => {
    res.json(metadata['/goodCookBook']);
});
router.get('/cauldronManual/metadata', (req, res) => {
    res.json(metadata['/cauldronManual']);
});


// Export the router
module.exports = router;