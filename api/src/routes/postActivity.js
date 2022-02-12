const { Router } = require('express');

const route = Router()

route.post('/', (req, res) => {
    res.send("ACTIVIDADES OK")
})

module.exports = route;