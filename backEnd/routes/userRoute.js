import express from 'express'
import { createUser, deleteUser, getUser } from '../controllers/userController.js'

const route = express.Router()

route.get('/', getUser)
route.post('/', createUser)
route.delete('/:id', deleteUser)

export default route;