import express from 'express'
const router = express.Router()
import { getUser,deleteUser,createUser,updateUser, currentUser } from '../controllers/admin.controller.js'

router.get('/users',getUser)
router.delete('/users/:id/delete',deleteUser)
router.post('/users/create',createUser)
router.put('/edituser/:id',updateUser)
router.get('/edituser/:id', currentUser)
export default router