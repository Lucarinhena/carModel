import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationsRepository";
import { Specification } from "../models/Specification";

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specifications = new Specification();

    Object.assign(specifications, { name, description, created_at: Date() });

    this.specifications.push(specifications);
  }
  list() {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specifications = this.specifications.find(specification => specification.name === name);
    return specifications
  }
}

export { SpecificationsRepository };
