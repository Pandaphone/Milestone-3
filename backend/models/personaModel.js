const mongoose = require('mongoose')

const personaSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50,
    },
    description: String,
    uNames: String,
    pWords: String,
}, {
    timestamps: true,
})

module.exports = mongoose.model('PersonaModel', personaSchema)