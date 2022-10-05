const TipoEquipo = require('../models/tipoEquipo')
const { request, response} = require ('express')

/* FUNCTIONS =>

/* Crea tipo de equipo */

const createTipoEquipo = async (req = request, res = response) => {
    const nombre = (req.body.nombre)? req.body.nombre.toUpperCase() : ' ';
    const tipoEquipoBD = await TipoEquipo.findOne({nombre})
    if(tipoEquipoBD){
        return res.status(400).json({msg: 'Nombre ya en existencia'})
    }

    const datos = {
        nombre
    }
    const tipoEquipo = new TipoEquipo(datos)
    console.log(tipoEquipo);
    await tipoEquipo.save()
    res.status(201).json(req.body)
}



/* Consulta todos los tipos de equipos*/

const getTipoEquipo = async (req = request, res = response) => {
    try{
        console.log(req.query)
        const estado = req.query.estado
        const query = {estado}
        const tipoEquipoBD = await TipoEquipo.find(query)
        return res.json(tipoEquipoBD)
    } catch(e){
        console.log(e)
        return res.status(500).json({msg:e})
    }    
}


/* Consulta tipo de equipo por ID */

const getTipoEquipoByID = async (req = request , res = response) => {
    try{
        console.log(req.query)
        console.log(req.params)
        const estado = req.query.estado
        const id = req.params.id
        const query = {estado: estado, _id: id}
        const tipoEquipoBD = await TipoEquipo.findOne(query)
        return res.json(tipoEquipoBD)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }        

}


/* Actualiza un tipo de equipo por ID */

const updateTipoEquipoID = async (req = request , res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const tipoequipoDB = await TipoEquipo.findById(id)
        if(!tipoequipoDB){
            return res.json({msg: 'No existe el tipo equipo'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoEquipo = await TipoEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoEquipo)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}


/* Elimina tipo de equipo por ID */

const deleteTipoEquipoByID = async (req = request , res = response) => {
    try{
        console.log(req.params)
        const id = req.params.id
        const tipoequipoDB = await TipoEquipo.findById(id)
        if(!tipoequipoDB){
            return res.status(404).json({msg: 'No existe el tipo equipo'})
        }
        await TipoEquipo.findByIdAndDelete(id)
        return res.status(204).json({msg: 'Eliminado', id})
    }catch(e){
        console.log(e)
        return res.status(500).json({msg:e})  
    }
}


module.exports = {
    createTipoEquipo,
    getTipoEquipo,
    getTipoEquipoByID,
    updateTipoEquipoID,
    deleteTipoEquipoByID
}

