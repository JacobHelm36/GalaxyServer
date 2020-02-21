import mongoose from "mongoose";
import Stars from "../models/Stars";

const _repository = mongoose.model("Stars", Stars);

class StarsService {

  async getAll() {
    return await _repository.find({});
  }

  async findById(id) {
    return await _repository.findById(id)
  }
  async getByStarsId(galaxyId) {//galaxy id
    return await _repository.find({
      galaxy: galaxyId
    })
  }
 
  async addStar(rawData) {
    return await _repository.create(rawData);
  }
  async update(id, update) {
    //NOTE {new: true} insures I get the object back after the change
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async create(rawData) {
    await _repository.create(rawData)
  }
  async delete(id) {
    await _repository.findByIdAndDelete(id)
  }
}

const starsService = new StarsService();
export default starsService;
