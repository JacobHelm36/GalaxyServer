import express from "express";
import starsService from "../services/StarsService";
import planetsService from "../services/PlanetsService"
 
export default class StarsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      //.get("/:id", this.getPlanetId)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete)
      .get("/:id/planets", this.getPlanetsByStarId)
  }


  async getPlanetsByStarId(req, res, next) {
      try {
        let data = await planetsService.getPlanetsByStarId(req.params.id)//star id
        return res.send(data)
      } catch (error) {
        next(error)
      }
    }

  async getAll(req, res, next) {
    try {
      let data = await starsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await starsService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await starsService.findById(req.params.id);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await starsService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }


  async delete(req, res, next) {
    try {
      await starsService.delete(req.params.id);
      res.send("Delorted");
    } catch (error) {
      next(error);
    }
  }
}