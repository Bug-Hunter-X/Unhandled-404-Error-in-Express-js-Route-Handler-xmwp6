const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    //This is the problematic part, returning a 404 with no message is not user-friendly
    return res.sendStatus(404);
  }
  res.json(user);
});