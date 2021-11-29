require('dotenv').config();
const express = require('express');
const enrouten = require('express-enrouten');
const expressValidator = require('express-validator');
const cuid = require('cuid');
const cors = require('cors');
const config = require('../config');

const app = express();
const port = process.env.PORT || config.get('PORT');
global.Helpers = require('./helpers/common');
global.CustomStatusCode = require('./helpers/enum').customStatusCode;

app.use(expressValidator());
app.use(cors());

// Embedd RequestId
app.use((req, res, next) => {
  req.requestId = cuid();
  next();
});

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routing
app.use('/', enrouten({ directory: 'routes' }));

// Not Found handler
/* eslint-disable no-unused-vars */
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Resource not found.',
  });
});

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json(err);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${port}`);
});


module.exports = app;
