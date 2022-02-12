const { Router } = require('express');

const route = Router()

route.get('/:idPais', (req, res) => {
    const { idPais } = req.params;
    const { name } = req.query;
    
})

module.exports = route;