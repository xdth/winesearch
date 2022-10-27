import { Wine } from "../entities/Wine";

export interface IWinesRepository {
  findAll(): Promise<Wine[]>;
  findById(id: number): Promise<Wine>;
  findByTitle(title: string): Promise<Wine>;
  save(wine: Wine): Promise<void>;
}