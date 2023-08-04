import express from "express";
import { createinternationalTour, deleteinternationalTour,getAllinternationalTour,getSingleinternationalTour,updateinternationalTour,getinternationalTourBySearch,getFeaturedinternationalTour,getinternationalTourCount} from "../controllers/internationalTour.js";




const router = express.Router();

// Create a new internationalTour
router.post("/", createinternationalTour);

// Update a internationalTour
router.put("/:id", updateinternationalTour);

// Delete a internationalTour
router.delete("/:id", deleteinternationalTour);

// Get a single internationalTour
router.get("/:id", getSingleinternationalTour);

// Get all internationalTours
router.get("/", getAllinternationalTour);

//Get internationalTour by search
router.get("/search/getinternationalTourBySearch",getinternationalTourBySearch);

// Get featured internationalTour
router.get("/search/getFeaturedinternationalTour", getFeaturedinternationalTour);

// Get internationalTour count
router.get("/search/getinternationalTourCount", getinternationalTourCount);
export default router;

