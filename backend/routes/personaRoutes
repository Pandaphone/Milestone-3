const express = require('express')
const router = express.Router()
const {getPersonas, createPersona, updatePersona, deletePersona} = require('../Controllers/pController')

router.get('/', getPersonas)

router.post('/', createPersona)

router.put('/:id', updatePersona)

router.delete('/:id', deletePersona)

module.exports = router