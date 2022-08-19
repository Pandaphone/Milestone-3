const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 4000

const app = express()

app.use('/api/persona', require('./routes/personaRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))