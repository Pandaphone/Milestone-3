const mongoose = require('mongoose')

const personaSchema = mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserModel',
    },
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