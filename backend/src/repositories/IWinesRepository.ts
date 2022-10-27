import { Wine } from "../entities/Wine";

export interface IWinesRepository {
  findAllWines(): Promise<Wine[]>;
  findWineById(wine: number): Promise<Wine>;
}