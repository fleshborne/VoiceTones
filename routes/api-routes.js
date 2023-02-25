const router = require('express').Router();
const db = require('../models');

// create object for db storage
router.post('/userTable', (req, res) => {
  db.userTable
    .create({
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
      gender: req.body.gender,
      age: req.body.age,
      voiceStrength: req.body.voiceStrength,
      voicePitch: req.body.voicePitch,
      speakingPace: req.body.speakingPace,
      recorder: req.body.recorder,
    })
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      res.status(401).json(err);
      console.log(err);
    });
});

// get the db info on user tables
router.get('/userTable', (req, res) => {
  db.userTable.findAll().then((response) => {
    console.log(response);
    res.json(response);
  });
});

module.exports = router;
