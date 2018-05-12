// Require Express and save it as a constant.
const express = require('express');
// Create an instance of Express and save it as a constant.
const app = express();
// Call the get method on the Express instance.
// Pass in the request and result as arguments.
app.get('/', (req, res) => {
  // Call the send method on the result.
  // Pass in an object as an argument.
  res.send({ hi: 'there'});
});
// Create a constant for the port number.
const PORT = process.env.PORT || 5000;
// Call the listen method on the Express instance.
// Pass in the port number as an argument.
app.listen(PORT);
