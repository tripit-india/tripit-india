// routes/tourInternityRoutes.js
import express from 'express';
import {
  createTourInternity,
  getAllTourInternity,
  getTourInternityByTourName,
  updateTourInternityById,
  deleteTourInternityById,
  getDatesAndCostingByTourName,
} from '../controllers/Internity.js';

const router = express.Router();

// Create a new tour itinerary
router.post('/jsy/:id/', createTourInternity);

// Get all tour itineraries
router.get('/', getAllTourInternity);

// Get a single tour itinerary by ID
router.get('/:tourName', getTourInternityByTourName);

// Update a tour itinerary by ID
router.put('/:tourName', updateTourInternityById);

// Delete a tour itinerary by ID
router.delete('/:tourName', deleteTourInternityById);

router.get('/it/:tourName', getDatesAndCostingByTourName);


export default router;
