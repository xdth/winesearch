import { Wine } from "../entities/Wine";

export interface IWinesRepository {
  findAll(): Promise<Wine[]>;
  findById(wine: number): Promise<Wine>;
  save(wine: Wine): Promise<void>;
}