import { deleteIngrediente, newIngrediente, retrieveIngrediente, updateIngrediente } from '../Controllers/IngredienteController.js'
import { Router } from 'express'

const router = new Router()

router.post('/createIngrediente', newIngrediente)
router.get('/retrieveIngrediente', retrieveIngrediente)
router.put('/updateIngrediente', updateIngrediente)
router.delete('/deleteIngrediente', deleteIngrediente)

export default router