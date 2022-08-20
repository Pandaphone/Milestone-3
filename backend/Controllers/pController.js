//Gets a list of user's Personas via a GET Request. 
//Route: /api/persona/
//Private.
const getPersonas = (req, res) => {
    res.status(200).json({ message: 'Here are your personas!'})
}

//Creates a new user Persona via a POST Request. 
//Route: /api/persona/
//Private.
const createPersona = (req, res) => {
    if(!req.body.text){
       res.status(400)
       throw new Error('Submit a proper persona!')
   }
    else{
        res.status(200).json({ message: 'Create a persona!'})
    }
}

//Updates the information of a user's Persona via a PUT Request. 
// Route: /api/persona/:id
//Private.
const updatePersona = (req, res) => {
    res.status(200).json({ message: `Update! ${req.params.id}`})
}

//Deletes a user's Persona via a DELETE Request. 
//Route: /api/persona/:id
//Private.
const deletePersona = (req, res) => {
    res.status(200).json({ message: `Delete! ${req.params.id}`})
}


module.exports = {
    getPersonas,
    createPersona,
    updatePersona,
    deletePersona,
}