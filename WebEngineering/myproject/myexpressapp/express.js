const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Server start
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});