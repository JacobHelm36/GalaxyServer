import express from "express";
import galaxyService from "../services/GalaxyService";
import starsService from "../services/StarsService";


export default class GalaxyController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/stars", this.getByStarsId)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete)
      .put("/:id/addStar", this.addStar);
    }
    //populate["galaxy.stars", "title"]
    
    //need to add your array of planets here
    async addStar(req, res, next) {
      try{
      let data = await starsService.addStar(
        req.params.id //galaxy id
      );
    } catch (error) {}
  }
  async getAll(req, res, next) {
    try {
      let data = await galaxyService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  //send to stars service for id
  async getByStarsId(req, res, next) {
    try {
      let data = await starsService.getByStarsId(req.params.id)//galaxy id
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await galaxyService.findById(req.params.id);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await galaxyService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await galaxyService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }


  async delete(req, res, next) {
    try {
      await galaxyService.delete(req.params.id);
      res.send("Delorted");
    } catch (error) {
      next(error);
    }
  }
}