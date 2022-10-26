import { Router } from "express";

const router = Router()

router.get('/wines', (request, response) => {
  return response.status(200).send()
})

export { router }