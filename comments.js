// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body parser to parse JSON data sent via HTTP POST
app.use(bodyParser.json());

// Create an array to hold comments
const comments = [];

// Create a POST endpoint to add a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send('Comment added');
});

// Create a GET endpoint to retrieve all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Start the server
app.listen(3000, () => {
    console.log('Server started');
});
