import mongoose, { Schema } from "mongoose";
import shelterUser from "./shelterUser";

const petSchema = new mongoose.Schema(
  {
    shelterId: {
      type: Schema.Types.ObjectId,
      ref: "shelterUser",
    },
    petName: {
      type: String,
      required: true,
    },
    petAge: {
      type: Number,
      required: true,
    },
    petCategory: {
      type: String,
      required: true,
    },
    gwithFirstPetOwner: {
      type: String,
      required: true,
    },
    canGetAlongWithOtherPets: {
      type: String,
      required: true,
    },
    canGetWithHumanAge: {
      type: String,
      required: true,
    },
    indoorOutdoor: {
      type: String,
      required: true,
    },
    petOusideHours: {
      type: String,
      required: true,
    },
    petWithOwnerAllTime: {
      type: String,
      required: true,
    },
    petStay: {
      type: String,
      required: true,
    },
    serviceAnimal: {
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
    laidbackPet: {
      type: String,
      required: true,
    },
    trainablePet: {
      type: String,
      required: true,
    },
    specialNeeds: {
      type: String,
      required: true,
    },
    petPhoto: {
      type: String,
      required: true,
    },
    medHistory: {
      type: String,
      required: true,
    },
    behaveIssue: {
      type: String,
      required: true,
    },
    vaccRecord: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const pets = mongoose.model("Pets", petSchema);
export default pets;
