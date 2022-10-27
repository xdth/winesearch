import { PostgresWinesRepository } from "../../repositories/implementations/PostgresWinesRepository";
import { CreateWineController } from "./CreateWineController";
import { CreateWineUseCase } from "./CreateWineUseCase";

const postgresWinesRepository = new PostgresWinesRepository()

const createWineUseCase = new CreateWineUseCase(
  postgresWinesRepository
)

const createWineController = new CreateWineController(createWineUseCase)

export { createWineUseCase, createWineController }