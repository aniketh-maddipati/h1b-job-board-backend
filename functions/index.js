const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const healthRoutes = require('./health');
const readRoutes = require('./read');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ type: 'application/*+json' }))



app.use('/', healthRoutes, readRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });


const api = functions.https.onRequest(app)

module.exports = {
    api
};

