// import dependencies
const express = require('express');
const path = require('path');
const cors = require('cors');
const atlier = require('./helpers/atlier');

// initialize app
const app = express();

// import helper file paths

// render static files
app.use(express.static(path.resolve(__dirname, '/../client/dist')));

// setup any middleware
app.use(express.json());
app.use(cors());
app.use(express.json());

// routes

// set port
const port = 8081;

// connect server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});

// API ROUTES
app.get('/api/reviews/all/:id', (req, res) => {
  const productID = req.params.id;

  atlier.getAllReviewsByProduct(productID, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});
