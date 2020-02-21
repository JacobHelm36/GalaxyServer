import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Stars = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    galaxy: { type: ObjectId, required: true},
    //stars: [{ type: ObjectId, ref: "stars"}] need this for planets
  },
  {timestamps: true, toJSON: { virtuals: true } }
);

export default Stars;
 