import { Wine } from "../../entities/Wine";
import { IWinesRepository } from "../IWinesRepository";

export class PostgresWinesRepository implements IWinesRepository {
  private wines: Wine[] = []; // temporary

  async findAll(): Promise<Wine[]> {
  }

  async findById(id: number): Promise<Wine> {
  }

  async findByTitle(title: string): Promise<Wine> {
    const wine = this.wines.find(wine => wine.title === title);

    return wine;
  }

  async save(wine: Wine): Promise<void> {
    this.wines.push(wine);
  }
}