const express = require('express');

const router = express.Router();

// V I S U A L I Z A T I O N S 
visualizations = {
  0: 'Raw Chart',
  1: 'Geo Chart'
}

// R O O T
router.get('/', (req, res) => {
  res.send('It works!');
});

// N E W   A P I
router.get('/api/new', (req, res) => {
  res.send('Creating a new API connection')
});

router.post('/api/new', (req, res) => {
  res.send('POST\'d to /api/new - noice')
})

// A P I S
router.get('/api', (req, res) => {
  res.send('All APIs')
});

// V I S U A L I Z E
router.get('/visualize/:id', (req, res) => {
  res.send(`Visuzlize ${visualizations[req.params.id]}`)
})

module.exports = router;
