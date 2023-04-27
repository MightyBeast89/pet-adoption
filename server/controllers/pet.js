import pets from "../model/pets.js";
import shelterUser from "../model/shelterUser.js";

export const addpet = async (req, res) => {
  try {
    const {
      shelterId,
      petName,
      petAge,
      petCategory,
      gwithFirstPetOwner,
      canGetAlongWithOtherPets,
      canGetWithHumanAge,
      indoorOutdoor,
      petOutsideHours,
      petWithOwnerAllTime,
      petStay,
      serviceAnimal,
      enthusiasticPet,
      playfulPet,
      laidbackPet,
      trainablePet,
      specialNeeds,
      petPhoto,
      medHistory,
      behaveIssue,
      vaccRecord,
    } = req.body;

    const shelteruser = await shelterUser.findById(shelterId);
    const newpet = new pets({
      shelterId: shelteruser._id,
      petName,
      petAge,
      petCategory,
      gwithFirstPetOwner,
      canGetAlongWithOtherPets,
      canGetWithHumanAge,
      indoorOutdoor,
      petOutsideHours,
      petWithOwnerAllTime,
      petStay,
      serviceAnimal,
      enthusiasticPet,
      playfulPet,
      laidbackPet,
      trainablePet,
      specialNeeds,
      petPhoto,
      medHistory,
      behaveIssue,
      vaccRecord,
    });
    const savepet = await newpet.save();
    res.status(201).json(savepet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
