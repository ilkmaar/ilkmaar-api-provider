const express = require('express');
const cors = require('cors');
const path = require('path');
const connection = require('./db');

const app = express();
app.use(cors());

// Import routes
const metaRoutes = require('./routes/meta');
const squishRoutes = require('./routes/squish');
const routes = require('./routes/routes');

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Use routes
app.use('/meta', metaRoutes);
app.use('/squish', squishRoutes);
app.use('/', routes);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send('Sorry, we cannot find that!');
});

// Catch 500 and forward to error handler
app.use(function(req, res, next) {
  res.status(500).send('Sorry, some kind of error!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});