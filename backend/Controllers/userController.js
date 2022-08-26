const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')

//Registers a new user via a POST Request. 
//Route: /api/users/
//Public.
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Add all fields, thanks.')
    }

    //Does this user exist?
    const userExist = await UserModel.findOne({email})

    if(userExist) {
        res.status(400)
        throw new Error("User exists already!")
    }

    //Password Hashing
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create User
    const user = await UserModel.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else{
        res.status(400)
        throw new Error('Invalid!')
    }

})

//Authenticates a user via a POST Request. 
//Route: /api/users/login
//Public.
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    //check for valid email
    const user = await UserModel.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else{
        res.status(400)
        throw new Error('Incorrect Credentials!')
    }

})

//Gets user data via a GET Request. 
//Route: /api/users/me
//Public.
const getMe = asyncHandler(async (req, res) => {
    const {_id, name, email} = await UserModel.findById(req.user._id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

//Generate webToken
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '31d',
    })
}

module.exports = {
    registerUser, loginUser, getMe,
}