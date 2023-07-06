const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Import routes
const metaRoutes = require('./routes/meta');
const squishRoutes = require('./routes/squish');
const routes = require('./routes/routes');

// Use routes
app.use('/meta', metaRoutes);
app.use('/squish', squishRoutes);
app.use('/', routes);

const port = 80;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});