const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { patientRoutes } = require('./api/routes');

/* Config */

const app = express();

/* Middlewares */

app.use(express.json());

app.use(cors());

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

/* Routes */

app.use('/api/v1/patients', patientRoutes);

module.exports = app;
