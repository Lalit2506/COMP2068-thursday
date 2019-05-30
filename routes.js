const express = require('express');

const app = express();

//Input our page routes
const pageRoutes = require('./routes/pages')

//Register page routes with our app
app.use('/', pageRoutes);

// Export our changes
module.exports = app;