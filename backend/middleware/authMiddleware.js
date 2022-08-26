const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    //initialize token variable to check for the webToken
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //Splits into an array with Bearer as index 0 and the token as index 1
            token = req.headers.authorization.split(' ')[1]

            //Verification
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get User, exclude the password hash
            req.user = await UserModel.findById(decoded.id).select('-password') 

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized!')
        }
    }
    
    if(!token){
        res.status(401)
        throw new Error('Not authorized. Token missing.')
    }

})

module.exports = {protect}