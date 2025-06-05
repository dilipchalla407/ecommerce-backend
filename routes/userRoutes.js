const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('List of users (authentication required)');
});

router.post('/login', (req, res) => {
    res.send('User login endpoint');
});

module.exports = router;