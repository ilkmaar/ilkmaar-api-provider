const express = require('express');
const router = express.Router();
const connection = require('../../db');
const metadata = require('./metadata');
const queries = require('./queries');

router.get('/list', (req, res) => {
    connection.query(queries['/list'], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while querying the database' });
      }
      res.json(results);
    });
});

// Creature Factions Query
router.get('/creatureLookup', (req, res) => {
    connection.query(queries['/creatureLookup'], function(err, results, fields) {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while querying the database' });
        }
        res.json(results);
    });
});

// Creature Health
router.get('/creatureHealth', (req, res) => {
    connection.query(queries['/creatureHealth'], function(err, results, fields) {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while querying the database' });
        }
        res.json(results);
    });
});


// Creature Mood
router.get('/creatureMood', (req, res) => {
    connection.query(queries['/creatureMood'], function(err, results, fields) {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while querying the database' });
        }
        res.json(results);
    });
});

// Happiest Creatures
router.get('/happiestCreatures', (req, res) => {
    connection.query(queries['/happiestCreatures'], function(err, results, fields) {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while querying the database' });
        }
        res.json(results);
    });
});

// Triage List
router.get('/triageList', (req, res) => {
    connection.query(queries['/triageList'], function(err, results, fields) {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while querying the database' });
        }
        res.json(results);
    });
});

// Creature Interactions Query
router.get('/interactions', (req, res) => {
    const { creatureName } = req.query;
    connection.query(queries['/interactions'], [creatureName], (err, results, fields) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while querying the database' });
        }
        res.json(results);
    });
});

// Creature Gifts Query
router.get('/gifts', (req, res) => {
    const { creatureName } = req.query;
    connection.query(queries['/gifts'], [creatureName], (err, results, fields) => {
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

router.get('/creatureLookup/metadata', (req, res) => {
    res.json(metadata['/creatureLookup']);
});

router.get('/interactions/metadata', (req, res) => {
    res.json(metadata['/interactions']);
});

router.get('/gifts/metadata', (req, res) => {
    res.json(metadata['/gifts']);
});

router.get('/creatureHealth/metadata', (req, res) => {
    res.json(metadata['/creatureHealth']);
});

router.get('/creatureMood/metadata', (req, res) => {
    res.json(metadata['/creatureMood']);
});

router.get('/happiestCreatures/metadata', (req, res) => {
    res.json(metadata['/happiestCreatures']);
});

router.get('/triageList/metadata', (req, res) => {
    res.json(metadata['/triageList']);
});

// Export the router
module.exports = router;