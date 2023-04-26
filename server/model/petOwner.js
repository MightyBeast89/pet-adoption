import mongoose from "mongoose";

const petOwnerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      min: 5,
      max: 50,
      required: true,
    },
    lastName: {
      type: String,
      min: 5,
      max: 50,
      required: true,
    },
    email: {
      type: String,
      min: 5,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 8,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    Age: {
      type: Number,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    favorites: {
      type: Array,
      default: [],
    },
    surveyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "survey",
    },
  },
  { timestamps: true }
);

const petOwner = mongoose.model("PetOwner", petOwnerSchema);
export default petOwner;
