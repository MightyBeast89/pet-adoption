import mongoose from "mongoose";

const shelterUserSchema = new mongoose.Schema(
  {
    //   shelterId: {
    //     type: String,
    //     required: true,
    //   },
    shelterName: {
      type: String,
      required: true,
      min: 5,
      max: 50,
    },
    shelterEmail: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    shelterPassword: {
      type: String,
      required: true,
      min: 8,
    },
    shelterPhoneNumber: {
      type: String,
      required: true,
    },
    shelterLocation: {
      type: String,
      required: true,
    },
    shelterPets: {
      type: Array,
      default: [],
    },
  },
  { timestamp: true }
);

const shelterUser = mongoose.model("ShelterUser", shelterUserSchema);
export default shelterUser;
