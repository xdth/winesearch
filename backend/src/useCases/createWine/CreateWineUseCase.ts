import { Wine } from "../../entities/Wine";
import { IWinesRepository } from "../../repositories/IWinesRepository";
import { ICreateWineRequestDTO } from "./CreateWineDTO";

export class CreateWineUseCase {
  constructor(
    private winesRepository: IWinesRepository
  ) {}
  
  async execute(data: ICreateWineRequestDTO) {
    const wineAlreadyExists = await this.winesRepository.findByTitle(data.title);

    if(wineAlreadyExists) {
      throw new Error('Wine already exists');
    }

    const newWine = new Wine(data);

    await this.winesRepository.save(newWine);
  }
}