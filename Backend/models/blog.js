
import mongoose from 'mongoose';

const subtitleSchema = new mongoose.Schema({
  subtitleTitle: {
    type: String,
    required: true,
  },
  subtitleImage: String,
  subtitleDescription: {
    type: String,
    required: true,
  },
});

const blogSchema = new mongoose.Schema({
  mainTitle: {
    type: String,
    required: true,
  },
  mainImage: String,
  mainDescription: {
    type: String,
    required: true,
  },
  subtitles: [subtitleSchema],
});

export default mongoose.model('Blog', blogSchema);
