const mongoose = require('mongoose')

const personaSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50,
    },
    Image: String,
    Description: String,
})