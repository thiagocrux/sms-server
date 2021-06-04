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

app.use(cors());

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

/* Routes */

app.use('/api/v1/patients', examRoutes);
app.use('/api/v1/patients', monitoringRoutes);
app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/patients', treatmentRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;
