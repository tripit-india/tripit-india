import express from "express";
import { createTour, deleteTour,getSingleTour,updateTour,getTourBySearch,getFeaturedTour, getBagpackTour,getTourCount,getTourCounts,getAllToursExceptFeatured} from "../controllers/tourController.js";
import {verifyAdmin} from '../utils/verifyToken.js'



const router = express.Router();

// Create a new tour
router.post("/",verifyAdmin, createTour);

// Update a tour
router.put("/:id",verifyAdmin, updateTour);

// Delete a tour
router.delete("/:id",verifyAdmin, deleteTour);

// Get a single tour
router.get("/:id", getSingleTour);

// Get all tours
router.get("/", getAllToursExceptFeatured);

//Get tour by search
router.get("/search/getTourBySearch",getTourBySearch);

// Get featured tour
router.get("/search/getFeaturedTour", getFeaturedTour);

// Get tour count
router.get("/search/getTourCount", getTourCount);


router.get("/search/getTourCounts", getTourCounts);


router.get('/search/bagpack', getBagpackTour);

export default router;

