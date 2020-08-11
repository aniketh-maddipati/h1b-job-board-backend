const express = require('express');
const router = express.Router();
var admin = require("firebase-admin");

var serviceAccount = require("./h1-board-firebase-adminsdk-flfrk-92389457cd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://h1-board.firebaseio.com"
});

const db = admin.firestore();

router.get('/:key/:value', async (req, res) => {
    console.log(req.params.key, req.params.value)
    const employersRef = await db.collection('employers');
    const snapshot = await employersRef.where(req.params.key, '==', req.params.value).get();
if (snapshot.empty) {
  res.status(400).send('No matching documents')
} else {
    let response = []
    snapshot.forEach(doc =>  {
        response.push(doc.data());
      });
      res.status(200).send(response)
}
    
})


module.exports = router;