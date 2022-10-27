import { Request, Response } from "express";
import { CreateWineUseCase } from "./CreateWineUseCase";

export class CreateWineController {
  constructor(
    private createWineUseCase: CreateWineUseCase
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, designation, country } = request.body;

    try {
      await this.createWineUseCase.execute({
        title,
        designation,
        country
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }

  }
}

