import mongoose, { Schema } from "mongoose";

const surveySchema = new mongoose.Schema(
  {
    petOwnerId: {
      type: Schema.Types.ObjectId,
      ref: "petOwner",
    },
    ageBracket: {
      type: String,
      required: true,
    },
    existingPetOwner: {
      type: String,
      required: true,
    },
    okWithOtherPet: {
      type: String,
      required: true,
    },
    petGoodWith: {
      type: String,
      required: true,
    },
    indoorOutdoor: {
      type: String,
      required: true,
    },
    hoursOutside: {
      type: String,
      required: true,
    },
    petArea: {
      type: String,
      required: true,
    },
    servicePet: {
      type: String,
      required: true,
    },
    enthusiasticPet: {
      type: String,
      required: true,
    },
    playfulPet: {
      type: String,
      required: true,
    },
    laidBackPet: {
      type: String,
      required: true,
    },
    willingToTrainPet: {
      type: String,
      required: true,
    },
    specialNeeds: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const survey = mongoose.model("Survey", surveySchema);
export default survey;
