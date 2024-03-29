import { Router } from "express";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationRepository";

const specificationsRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );
  createSpecificationService.execute({ name, description });
  res.status(201).send();
});

specificationsRoutes.get("/", (req, res) => {
  return res.json(specificationRepository.list());
});

export { specificationsRoutes };
