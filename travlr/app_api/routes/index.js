const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// Route: GET /trips
router.get('/trips', tripsController.tripsList);

// Route: GET /trips/:tripCode
router.get('/trips/:tripCode', tripsController.tripsFindCode);

// Export the router
module.exports = router;