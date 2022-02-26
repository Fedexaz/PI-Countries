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

        return res.status(201).json({
            msg: `Actividades '${name}' creada correctamente!`
        });
    }
    else{
        return res.status(400).send({
            msg: "Faltan algunos campos para agregar la actividad"
        })
    }
})

route.get('/', async (req, res) => {
    
    const result = await Activity.findAll();

    let array = []

    if(result){
        for(let i = 0; i < result.length; i++){
            if(array.indexOf(result[i].name) === -1){ // si no encuentra repetidos no los pushea al array
                array.push(result[i].name)
            }
        }
    }

    res.send(array);
})

route.delete('/:name', async (req, res) => {//la he creado porque compartí el enlace de la página en un grupo de whatsapp en el cual uno se hizo el vivo y publicó una actividad que iba a ser de mal gusto, y para evitar hacer muchos deploy directamente borro un registro de actividad por nombre (ya que es único)
    const { name } = req.params;
    try {
        await Activity.destroy({
            where: {
                name
            }
        })
        res.status(204).json({res: 'Actividad ´' + name + '´ borrada!'})
        console.log('Actividad ´' + name + '´ borrada!');
    } catch (error) {
        console.log(error);
    }
})

module.exports = route;