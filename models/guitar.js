import { Schema, model, models } from "mongoose";

const GuitarSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  price: {
    type: Number,
    required: [true, "Price is required."],
  },
  guitarName: {
    type: String,
    required: [true, "Guitar name is required."],
  },
  image: {
    type: String,
    required: [true, "Image is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Guitar = models.Guitar || model("Guitar", GuitarSchema);

export default Guitar;
