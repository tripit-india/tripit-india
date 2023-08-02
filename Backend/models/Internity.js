import mongoose from 'mongoose';

const dateSchema = new mongoose.Schema({
  month: String,
  dates: [String],
});

const costingSchema = new mongoose.Schema({
  category: String,
  cost: String,
});

const miniDataSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  activities: [String],
  meals: [String],
});

const tourInternitySchema = new mongoose.Schema({
  tourName: {
    type: String,
    required: true,
  },
  tourDays: [
    {
      dayNumber: {
        type: Number,
        required: true,
      },
      dayData: {
        type: String,
        required: true,
      },
    },
  ],
  miniData: [miniDataSchema],
  dates: [dateSchema],
  costing: [costingSchema],
});

export default mongoose.model('TourInternity', tourInternitySchema);
