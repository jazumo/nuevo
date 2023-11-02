import { deleteMenu, newMenu, retrieveMenu, updateMenu } from '../Controllers/MenuController.js'
import { Router } from 'express'

const router = new Router()

router.post('/createMenu', newMenu)
router.get('/retrieveMenu', retrieveMenu)
router.put('/updateMenu', updateMenu)
router.delete('/deleteMenu', deleteMenu)

export default router