const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Import routes
const metaRoutes = require('./routes/meta');
const squishRoutes = require('./routes/squish');
const infoRoutes = require('./routes/info/info');
const playerRoutes = require('./routes/players/players');
const creatureRoutes = require('./routes/creatures/creatures');
const craftingRoutes = require('./routes/crafting/crafting');
const foragingRoutes = require('./routes/foraging/foraging');

// Use routes
app.use('/meta', metaRoutes);
app.use('/squish', squishRoutes);

app.use('/info', infoRoutes); //-- location_groups, visitorLog
app.use('/players', playerRoutes); //--  /, foraging, gifting, crafting, trash, allPlayerGiftingLog
app.use('/creatures', creatureRoutes); //-- /, creatureLookup, creatureHealth, creatureMood, happiestCreatures, triageList, interactions, gifts 
app.use('/crafting', craftingRoutes); //-- cookBook, goodCookBook, cauldronManual
app.use('/foraging', foragingRoutes); //-- resourceFinder

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});