const asyncHandler = require('express-async-handler')

const PersonaModel = require('../models/personaModel')

//Gets a list of user's Personas via a GET Request. 
//Route: /api/persona/
//Private.
const getPersonas = asyncHandler(async (req, res) => {
const personas = await PersonaModel.find()

    res.status(200).json(personas)
})

//Creates a new user Persona via a POST Request. 
//Route: /api/persona/
//Private.
const createPersona = asyncHandler(async (req, res) => {
    if(!req.body.text){
       res.status(400)
       throw new Error('Submit a proper persona!')
   }
    else{
        const personas = await PersonaModel.create({
            nickname: req.body.nickname
        })
        res.status(200).json(personas)
    }
})

//Updates the information of a user's Persona via a PUT Request. 
// Route: /api/persona/:id
//Private.
const updatePersona = asyncHandler(async (req, res) => {
    const personas = await PersonaModel.findById(req.params.id)

    if(!personas){
        res.status(400)
        throw new Error('Persona not found! Sure this one exists?')
    }
    else{
    const updateItem = await PersonaModel.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    res.status(200).json(updateItem)
}
    

    
})

//Deletes a user's Persona via a DELETE Request. 
//Route: /api/persona/:id
//Private.
const deletePersona = asyncHandler(async (req, res) => {
    const personas = await PersonaModel.findById(req.params.id)

    if(!personas){
        res.status(400)
        throw new Error('Persona not found! Sure this one existed?')
    }
    else{
        const deleteItem = await PersonaModel.remove()
        res.status(200).json({id: req.params.id})
    }
    
})


module.exports = {
    getPersonas,
    createPersona,
    updatePersona,
    deletePersona,
}