const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes); // Use the new routes under /api
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce Backend API!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:\${port}`);
});