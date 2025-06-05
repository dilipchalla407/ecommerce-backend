const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce Backend API!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:\${port}`);
});