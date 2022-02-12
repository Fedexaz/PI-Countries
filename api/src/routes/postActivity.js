const { Router } = require('express');
const { Country, Activity } = require("../db");

const route = Router()

const crearActividad = async (name, dificultad, duracion, temporada, idPais) => {
    const act = await Activity.create({
        name,
        dificultad,
        duracion,
        temporada
    })

    await act.addCountry(idPais)
    console.log("Actividad agregada")
}

route.post('/', async (req, res) => {
    const { name, dificultad, duracion, temporada, idPais } = req.body;

    crearActividad(name, dificultad, duracion, temporada, idPais)

    /*if(Array.isArray(idPais)){

    }else{

    } */

    const result = await Activity.findAll({
        include: Country
    })
    console.log("-------------------------> \n",result);
    res.send(result)
})

module.exports = route;