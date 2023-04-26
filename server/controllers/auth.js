import bcrypt, { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import shelterUser from "../model/shelterUser.js";
import petOwner from "../model/petOwner.js";

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

//Petowner register
export const petownerregister = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      age,
      street,
      city,
      province,
      country,
      favorites,
    } = req.body;

    const ownerSalt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(password, ownerSalt);

    const newPetOwner = new petOwner({
      firstName,
      lastName,
      email,
      password: passwordHashed,
      phoneNumber,
      age,
      street,
      city,
      province,
      country,
      favorites,
    });

    const savedPetOwner = await newPetOwner.save();
    res.status(201).json(savedPetOwner);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Login petOwner
export const petownerlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const petowner = await petOwner.findOne({ email: email });

    if (!petowner)
      return res.status(400).json({ message: "User does not exist" });

    const isMatchOwner = await bcrypt.compare(password, petowner.password);
    if (!isMatchOwner)
      return res.status(500).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: petowner._id }, process.env.JWT_SECRET);
    delete petowner.password;
    res.status(200).json({ token, petowner });
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
