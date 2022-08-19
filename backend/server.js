const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 4000

const app = express()

app.get('/api/books', (req, res) => {
    res.status(200).json({message: 'Hey!'})
})

app.listen(port, () => console.log(`Server started on port ${port}`))