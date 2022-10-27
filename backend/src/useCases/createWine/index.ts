import { PostgresWinesRepository } from "../../repositories/implementations/PostgresWinesRepository";
import { CreateWineUseCase } from "./CreateWineUseCase";

const postgresWinesRepository = new PostgresWinesRepository()

const createWineUseCase = new CreateWineUseCase(
  postgresWinesRepository
)