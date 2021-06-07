const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const cors = require('cors');

const {
  examRoutes,
  monitoringRoutes,
  patientRoutes,
  treatmentRoutes,
  userRoutes,
} = require('./api/routes');

/* Config */

const app = express();

/* Middlewares */

app.use(express.json());

app.use((req, res, next) => {
  app.use(cors());
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(morgan('dev'));

/* Routes */

app.use('/api/v1/patients', examRoutes);
app.use('/api/v1/patients', monitoringRoutes);
app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/patients', treatmentRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;
