// Create web server
// Load the Express module on our server
const express = require('express');
const app = express();
// Load the comments module on our server
const comments = require('./comments.js');
// Load the body-parser module on our server
const bodyParser = require('body-parser');
// Load the cors module on our server
const cors = require('cors');
// Load the fs module on our server
const fs = require('fs');
// Load the path module on our server
const path = require('path');
// Load the comments.json file
const commentsPath = path.join(__dirname, 'comments.json');
// Read the comments.json file
let commentsData = fs.readFileSync(commentsPath, 'utf8');
// Parse the comments.json file
let commentsArray = JSON.parse(commentsData);
// Set the port
const port = 4001;
// Use the body-parser module
app.use(bodyParser.json());
// Use the cors module
app.use(cors());
// Create a route that sends the comments data to the client
app.get('/comments', (req, res) => {
  res.json(commentsArray);
});
// Create a route that adds a comment to the comments data
app.post('/comments', (req, res) => {
  let newComment = req.body;
  commentsArray.push(newComment);
  fs.writeFileSync(commentsPath, JSON.stringify(commentsArray));
  res.json(newComment);
});
// Create a route that deletes a comment from the comments data
app.delete('/comments/:id', (req, res) => {
  let id = req.params.id;
  commentsArray = commentsArray.filter(comment => comment.id !== id);
  fs.writeFileSync(commentsPath, JSON.stringify(commentsArray));
  res.json(id);
});
// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
// Export the comments module
module.exports = comments;
// Export the comments.js file
module.exports = comments;
// Export the commentsArray
module.exports = commentsArray;
// Export the commentsPath
module.exports = commentsPath;
// Export the commentsData
module.exports = commentsData;
// Export the port
module.exports = port;
// Export the app
module.exports = app;
// Export the fs module
module.exports = fs;
// Export the path module
module.exports = path;