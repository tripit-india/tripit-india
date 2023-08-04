import express from "express";
import { createTour, deleteTour,getSingleTour,updateTour,getTourBySearch,getFeaturedTour, getBagpackTour,getTourCount,getTourCounts,getAllToursExceptFeatured} from "../controllers/tourController.js";




const router = express.Router();

// Create a new tour
router.post("/", createTour);

// Update a tour
router.put("/:id", updateTour);

// Delete a tour
router.delete("/:id",deleteTour);

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

