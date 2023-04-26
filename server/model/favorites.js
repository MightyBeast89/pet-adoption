import mongoose, { Schema } from "mongoose";

const favoriteSchema = new mongoose.Schema({
  petId: {
    type: Schema.Types.ObjectId,
    ref: "pets",
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "petowner",
  },
});
