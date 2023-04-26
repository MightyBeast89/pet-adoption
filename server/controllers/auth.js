import bcrypt, { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import shelterUser from "../model/shelterUser.js";

//Register Shelter User
export const register = async (req, res) => {
  try {
    const {
      shelterName,
      shelterEmail,
      shelterPassword,
      shelterPhoneNumber,
      shelterLocation,
      shelterPets,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(shelterPassword, salt);

    const newShelterUser = new shelterUser({
      shelterName,
      shelterEmail,
      shelterPassword: hashedPassword,
      shelterPhoneNumber,
      shelterLocation,
      shelterPets,
    });

    const savedShelterUser = await newShelterUser.save();
    res.status(201).json(savedShelterUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Log in shelterUser
export const login = async (req, res) => {
  try {
    const { shelterEmail, shelterPassword } = req.body;
    const shelteruser = await shelterUser.findOne({
      shelterEmail: shelterEmail,
    });

    if (!shelteruser)
      return res.status(400).json({ message: "User does not exist" });

    const isMatch = await bcrypt.compare(
      shelterPassword,
      shelteruser.shelterPassword
    );
    if (!isMatch)
      return res.status(500).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: shelteruser._id }, process.env.JWT_SECRET);
    delete shelteruser.shelterPassword;
    res.status(200).json({ token, shelteruser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
