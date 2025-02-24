import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema(
  {
    scientificName: { type: String, required: true },
    commonNames: { type: [String], required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Plant', plantSchema);
