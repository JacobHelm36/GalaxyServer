import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Value = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    stars: { type: ObjectId, required : true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Value;
