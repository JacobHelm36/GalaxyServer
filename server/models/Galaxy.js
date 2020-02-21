import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;


const galaxy = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    planets: { type: String },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default galaxy;
