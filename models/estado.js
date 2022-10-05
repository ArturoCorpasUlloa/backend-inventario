const { Schema, model} = require("mongoose");

const EstadoSchema = Schema({
    nombre:{
        type : String,
        require: [true, 'Nombre de estado requerido']
    },
    estado:{
        type : Boolean,
        default: true,
        require : true
    },
    fechaCreacion:{
        type: Date,
        default: new Date()
    },
    fechaActualizacion:{
        type: Date,
        default: new Date()
    }
})

module.exports = model('Estado' , EstadoSchema)