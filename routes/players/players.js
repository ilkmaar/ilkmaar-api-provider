const express = require('express');
const router = express.Router();
const connection = require('../../db');
const metadata = require('./metadata.js');
const queries = require('./queries.js');

router.get('/list', (req, res) => {
    connection.query(queries['/list'], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while querying the database' });
      }
      res.json(results);
    });
});

router.get('/foraging', (req, res) => {
    const { playerName } = req.query;
    connection.query(queries['/foraging'], [playerName], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while querying the database' });
      }
      res.json(results);
    });
});

router.get('/gifting', (req, res) => {
    const { playerName } = req.query;
    connection.query(queries['/gifting'], [playerName], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while querying the database' });
      }
      res.json(results);
    });
});

router.get('/crafting', (req, res) => {
    const { playerName } = req.query;
    connection.query(queries['/crafting'], [playerName], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'An error occurred while querying the database' });
      }
      res.json(results);
    });
});

router.get('/trash', (req, res) => {
    const { playerName } = req.query;
    connection.query(queries['/trash'], [playerName], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while querying the database' });
      }
      res.json(results);
    });
});

router.get('/allPlayerGiftingLog', (req, res) => {
    connection.query(queries['/allPlayerGiftingLog'], (err, results) => {
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

router.get('/foraging/metadata', (req, res) => {
    res.json(metadata['/foraging']);
});

router.get('/gifting/metadata', (req, res) => {
    res.json(metadata['/gifting']);
});

router.get('/crafting/metadata', (req, res) => {
    res.json(metadata['/crafting']);
});

router.get('/trash/metadata', (req, res) => {
    res.json(metadata['/trash']);
});

router.get('/allPlayerGiftingLog/metadata', (req, res) => {
    res.json(metadata['/allPlayerGiftingLog']);
});


// Export the router
module.exports = router;