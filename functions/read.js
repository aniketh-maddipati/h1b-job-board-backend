const express = require('express');
const router = express.Router();
var admin = require("firebase-admin");
var serviceAccount = require("./h1-board-firebase-adminsdk-flfrk-92389457cd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://h1-board.firebaseio.com"
});

// initialize db
const db = admin.firestore();


router.get('/:key/:value', async (req, res) => {
    var key = req.params.key;
    var value = req.params.value;
    //check
    if (isNumericalKey(key)){
        value = parseInt(value);
    }
    const employersRef = await db.collection('employers');
    const snapshot = await employersRef.where(key, '==', value).get();
if (snapshot.empty) {
  res.status(400).send('No matching documents')
} else {
    let response = []
    snapshot.forEach(doc =>  {
        response.push(doc.data());
      });
      res.status(200).send(response)
} 
});

const isNumericalKey = (key) => {
    if (key == ('state' || 'employers' || 'city')) {
        return false
    } else {
        return true
        
    }
}

module.exports = router;