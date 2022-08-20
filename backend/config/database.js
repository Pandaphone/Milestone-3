const mongoose = require('mongoose')

const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Connection Successful! Host: ${conn.connection.host}`.cyan)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectToDB