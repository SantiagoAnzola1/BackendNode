const express = require('express')
const router =express.Router()

const { getUsers, getUsersById, createUser } = require('../controllers/user.controller')


router.get('/', getUsers)

router.get('/:id', getUsersById )
    
router.post('/', createUser)
module.exports = router