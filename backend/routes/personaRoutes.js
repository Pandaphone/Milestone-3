const express = require('express')
const router = express.Router()
const {getPersonas, createPersona, updatePersona, deletePersona} = require('../Controllers/pController')
const {protect} = require("../middleware/authMiddleware")

router.get('/', protect, getPersonas)

router.post('/', protect, createPersona)

router.put('/:id', protect, updatePersona)

router.delete('/:id', protect, deletePersona)

module.exports = router