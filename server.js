'use strict';

// API boilerplate
const express = require('express');
const app = express();
const routes = require('./routes');

// Logging
const morgan = require('morgan');
const logger = require('./logger');

// Config
const config = require('config');

// Set up middleware for request parsing, logging, etc.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('short', { stream: logger.stream }));

// Load up the routes
app.use('/', routes);

// Start the API
//app.listen(config.apiPort);
const port = process.env.PORT || 5000;
const host = '0.0.0.0'
app.listen(port, host, )
//app.listen(process.env.PORT, '0.0.0.0');
logger.log('info', `api running on port ${port}`);

// Export API server for testing
module.exports = app;
