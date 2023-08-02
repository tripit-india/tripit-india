// controllers/tourInternityController.js
import TourInternity from '../models/Internity.js';

// Get all tour itineraries
export const getAllTourInternity = async (req, res) => {
  try {
    const tourIntineries = await TourInternity.find({});
    res.json(tourIntineries);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Assuming you have the necessary imports and models

export const getTourInternityByTourName = async (req, res) => {
  try {
    const { tourName } = req.params;
    const tourIntinery = await TourInternity.findOne({ tourName });
    if (tourIntinery) {
      res.json(tourIntinery);
    } else {
      res.status(404).json({ message: 'Tour itinerary not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getDatesAndCostingByTourName = async (req, res) => {
  try {
    const { tourName } = req.params;
    const datesAndCostingData = await TourInternity.findOne({ tourName }, 'dates costing');
    if (datesAndCostingData) {
      // Check if the 'dates' and 'costing' arrays are empty, and provide default values if needed
      if (datesAndCostingData.dates.length === 0) {
        datesAndCostingData.dates = ['No dates available'];
      }
      if (datesAndCostingData.costing.length === 0) {
        datesAndCostingData.costing = ['Costing information not available'];
      }

      res.json(datesAndCostingData);
    } else {
      res.status(404).json({ message: 'Dates and Costing data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Update a tour itinerary by ID
export const updateTourInternityById = async (req, res) => {
  try {
    const { tourName } = req.params;
    const {  tourDays, miniData } = req.body;

    const updatedTourInternity = await TourInternity.findByIdAndUpdate(
      tourName,
      {
        
        tourDays,
        miniData,
      },
      { new: true }
    );

    if (updatedTourInternity) {
      res.json({
        success: true,
        message: 'Tour itinerary updated successfully!',
        data: updatedTourInternity,
      });
    } else {
      res.status(404).json({ message: 'Tour itinerary not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a tour itinerary by ID
export const deleteTourInternityById = async (req, res) => {
  try {
    const { tourName } = req.params;
    const deletedTourInternity = await TourInternity.findByIdAndDelete(tourName);
    if (deletedTourInternity) {
      res.json({ success: true, message: 'Tour itinerary deleted successfully!' });
    } else {
      res.status(404).json({ message: 'Tour itinerary not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Create internity for a tour
export const createTourInternity = async (req, res) => {
  const tourId = req.params.id;
  const { tourDays, miniData, dates, costing } = req.body; // Include dates and costing in the request body

  try {
    // Create the internity data
    const tourInternity = new TourInternity({
      tourName: tourId,
      tourDays,
      miniData,
      dates, // Add dates to the tourInternity object
      costing, // Add costing to the tourInternity object
    });

    // Save the internity data to the database
    const savedTourInternity = await tourInternity.save();

    res.status(201).json({
      success: true,
      message: 'Tour internity created successfully!',
      data: savedTourInternity,
    });
  } catch (error) {
    console.error('Error creating tour internity:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating tour internity.',
    });
  }
};
