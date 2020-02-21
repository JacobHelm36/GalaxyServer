import mongoose from "mongoose";
import galaxy from "../models/galaxy";

const _repository = mongoose.model("galaxy", galaxy);

class GalaxyService {
  async addStar(id, starsId) {
    let order = await _repository.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          stars : starsId
        }
      },
      { new : true }
    );
  }
  
  async getAll() {
    return await _repository.find({})
    //.populate("sunId", "title")
    //.populate("planetId", "title")
    //.populate("moonId", "title")
  }

  async getSunById(id) {
    return await _repository.find({ sunId : id })
    }

  async findById(id) {
    return await _repository.findById(id)
  }

  async create(rawData) {
    return await _repository.create(rawData);
  }

  async update(id, update) {
    //NOTE {new: true} insures I get the object back after the change
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async delete(id) {
    await _repository.findByIdAndDelete(id)
  }
}

const galaxyService = new GalaxyService();
export default galaxyService;
