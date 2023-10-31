//EJEMPLO DE RUTA
import { newStudent } from '../Controllers/StudentController.js'
import { Router } from 'express'

const router = new Router()

router.post('/create', newStudent)

export default router