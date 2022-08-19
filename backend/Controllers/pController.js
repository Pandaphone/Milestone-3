const getPersonas = (req, res) => {
    res.status(200).json({ message: 'Here are your personas!'})
}

module.exports = {
    getPersonas,
}