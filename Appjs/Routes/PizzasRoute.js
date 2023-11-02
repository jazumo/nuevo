import { deletePizza, newPizza, retrievePizza, updatePizza } from '../Controllers/PizzaController.js'
import { Router } from 'express'

const router = new Router()

router.post('/createPizza', newPizza)
router.get('/retrievePizza', retrievePizza)
router.put('/updatePizza', updatePizza)
router.delete('/deletePizza', deletePizza)

export default router