const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const healthRoutes = require('./health');
const readRoutes = require('./read');

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(cors({ origin: true }));

/* USE THE ROUTES LOCATED IN THESE FILES */
app.use('/', readRoutes, healthRoutes)

/* use the firebase functions built in https request listener to send http request data to our express app*/
const api = functions.https.onRequest(app);

module.exports = {
  api
};
