import mongoose from "mongoose";
import Planets from "../models/Planets";

const _repository = mongoose.model("Planets", Planets);

class PlanetsService {

  async getAll() {
    return await _repository.find({});
  }

  async findById(id) {
    return await _repository.findById(id)
  }
  async getPlanetsByStarId(starId) {//star id
    return await _repository.find({
      star: starId
    })
  }
 
  async addStar(rawData) {
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

const planetsService = new PlanetsService();
export default planetsService;
