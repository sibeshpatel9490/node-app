// import required essentials
const express = require('express');
// create new router
const router = express.Router();
// create a JSON data array
const data = [
    { id: 1, title: 'DevOps'},
    { id: 1, title: 'Cloud Architect'},
    { id: 1, title: 'Data Engineering'},
    { id: 1, title: 'Data Science'}
];


router.get('/', function (req, res) {
    res.status(200).json(data);
});

module.exports = router;
