import { Router } from "express";
import { createWineController } from "./useCases/createWine";

const router = Router()

router.post('/wines', (request, response) => {
  return createWineController.handle(request, response)
})

router.get('/wines', (request, response) => {
  return response.status(200).send()
})

export { router }