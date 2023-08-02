import express from 'express';
import CustomTourRequest from '../models/customTourRequest.js';

const router = express.Router();

router.post('/custom-tour-request', async (req, res) => {
  try {
    const { tourLocations, fullName, phone, email, bookingDate } = req.body;

    // Create a new custom tour request document
    const customTourRequest = new CustomTourRequest({ tourLocations, fullName, phone, email, bookingDate });

    // Save the document to the database
    await customTourRequest.save();

    // Send the saved document back as a response
    res.status(201).json({ success: true, message: 'Custom tour request submitted successfully!', customTourRequest });
  } catch (error) {
    console.error('Error submitting custom tour request:', error);
    res.status(500).json({ success: false, message: 'Error submitting custom tour request.' });
  }
});


export default router;
