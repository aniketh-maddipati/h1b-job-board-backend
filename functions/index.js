const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const healthRoutes = require('./health');
const readRoutes = require('./read');

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(cors({ origin: true }))
app.use('/', readRoutes, healthRoutes)

// not as clean, but a better endpoint to consume
// const api = functions.https.onRequest((request, response) => {
//   if (!request.path) {
//     request.url = `/${request.url}` // prepend '/' to keep query params if any
//   }
//   return app(request, response)
// });

const api = functions.https.onRequest(app);

module.exports = {
  api
}