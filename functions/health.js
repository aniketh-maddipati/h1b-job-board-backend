const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send('WELCOME TO H1b JOB BOARD');
});



module.exports = router;
