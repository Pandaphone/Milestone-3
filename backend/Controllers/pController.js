const asyncHandler = require('express-async-handler')

const PersonaModel = require('../models/personaModel')
const UserModel = require('../models/userModel')

//Gets a list of user's Personas via a GET Request. 
//Route: /api/persona/
//Private.
const getPersonas = asyncHandler(async (req, res) => {
const personas = await PersonaModel.find({user: req.user.id})

    res.status(200).json(personas)
})

//Creates a new user Persona via a POST Request. 
//Route: /api/persona/
//Private.
const createPersona = asyncHandler(async (req, res) => {
    if(!req.body.nickname){
       res.status(400)
       throw new Error('Submit a proper persona!')
   }
    else{
        const personas = await PersonaModel.create({
            nickname: req.body.nickname,
            description: req.body.description,
            uNames: req.body.uNames,
            pWord: req.body.pWords,
            user: req.user.id
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

    //Check if the user exists
    if(!req.user){
        res.status(401)
        throw new Error('User not found!')
    }

    //Check if current user is the one who made the Persona
    if(personas.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized to do this!')
    }
    
    const updatedItem = await PersonaModel.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    res.status(200).json(updatedItem)
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

    //Check if the user exists
    if(!req.user){
        res.status(401)
        throw new Error('User not found!')
    }

    //Check if current user is the one who made the Persona
    if(personas.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized to do this!')
    }

    await personas.remove()


    res.status(200).json({id: req.params.id})
    
    
})


module.exports = {
    getPersonas,
    createPersona,
    updatePersona,
    deletePersona,
}