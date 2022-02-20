const { Router } = require('express');
const { Activity } = require("../db");

const route = Router()

const crearActividad = async (name, dificultad, duracion, temporada, idPais) => {
    try {
        const act = await Activity.create({
            name,
            dificultad,
            duracion,
            temporada
        }) 
        await act.addCountry(idPais)
    } catch (e) {
        console.log(e);
    }
}

route.post('/', /* async */ (req, res) => {
    const { name, dificultad, duracion, temporada, idPais } = req.body;

    if(name && dificultad && duracion && temporada && idPais){
        idPais.forEach((e) =>{
            crearActividad(name, dificultad, duracion, temporada, e)
        })

        res.status(201).json({
            msg: `Actividades '${name}' creada correctamente!`
        });
    }
    else{
        res.status(400).send({
            msg: "Faltan algunos campos para agregar la actividad"
        })
    }
})

route.get('/', async (req, res) => {
    
    const result = await Activity.findAll();

    let array = []

    for(let i = 0; i < result.length; i++){
        if(array.indexOf(result[i].name) === -1){
            array.push(result[i].name)
        }
    }

    res.send(array);
})

module.exports = route;