const { Router } = require('express');
const { Country, Activity } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');

const route = Router();

/* const loadDB = async () => {
    console.log("Cargando datos...")
    const existe = await Country.count();
    if(!existe){
        axios.get('https://restcountries.com/v3/all')
        .then(respuesta => {
            respuesta.data.forEach(async (e) => {
                let cap = "None";
                if(Array.isArray(e.capital)){
                    cap = e.capital.pop();
                }

                await Country.create({
                    ID: e.cca3,
                    name: e.name.common,
                    urlImg: e.flags[1],
                    continent: e.region,
                    capital: cap,
                    subregion: !e.subregion ? 'Antarctic' : e.subregion,
                    area: e.area,
                    poblacion: e.population
                })
            })
            console.log("Datos traidos de la API y cargados en la DB");
        })
        .catch (e => {
            console.log(e);
        })
    }
    else{
        console.log("Base de datos cargada!")
    }
}

loadDB() */

route.get('/', async (req, res) => {
    const { name } = req.query;  

    if(name){
        const resultado = await Country.findAll({
            where: {
                name:{
                    [Op.iLike]: `%${name}%`
                }
            },
            include: Activity
        })

        if(resultado.length === 0){
            return res.status(404).json({
                msg: "País no encontrado"
            })
        }

        res.status(200).json(resultado)
    }
    else{
        const resultado = await Country.findAll({include: Activity})
        res.status(200).send(resultado)
    }

})

route.get('/:idPais', async (req, res) => {
    const { idPais } = req.params

    const existe = await Country.findAll({
        where:{
            ID: idPais
        },
        include: Activity
    })

    if(existe){
        res.json(existe)
    }
    else return res.status(404).json({
        msg: "País no encontrado"
    })
})

module.exports = route;