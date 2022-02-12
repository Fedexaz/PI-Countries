const { Router } = require('express');
const { Country, Activity } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');

const route = Router();

const loadDB = async () => {
    const existe = await Country.findByPk('ARG');

    if(!existe){
        const respuesta = await axios.get('https://restcountries.com/v3/all')

        try {
            respuesta.data.forEach(async (e) => {
                let cap = "None";

                if(Array.isArray(e.capital)){
                    let cap = e.capital.pop();
                }

                await Country.create({
                    ID: e.cca3,
                    name: e.name.common,
                    urlImg: e.flags[1],
                    continent: e.region,
                    capital: cap,
                    subregion: e.subregion,
                    area: e.area,
                    poblacion: e.population
                })
            })
            console.log("Datos traidos de la API y cargados en la DB");
        } catch (e) {
            console.log(e);
        }
    }
    else{
        console.log("Base de datos cargada!")
    }
}


route.get('/', async (req, res) => {
    await loadDB();

    const { name } = req.query;  

    if(name){
        const resultado = await Country.findAll({
            where: {
                name:{
                    [Op.iLike]: `%${name}%`
                }
            }
        })

        if(resultado.length === 0){
            return res.status(404).json({
                msg: "País no encontrado"
            })
        }

        res.json(resultado)
    }
    else{
        const resultado = await Country.findAll()
        res.json(resultado)
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
})

module.exports = route;