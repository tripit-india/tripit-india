import mongoose from 'mongoose';

const customTourRequestSchema = new mongoose.Schema({
  tourLocations: {
    type: [String],
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: false,
  },
}, { timestamps: true });

const CustomTourRequest = mongoose.model('CustomTourRequest', customTourRequestSchema);

export default CustomTourRequest;
