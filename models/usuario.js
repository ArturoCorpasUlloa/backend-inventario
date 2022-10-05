const { Schema, model} = require("mongoose");

const UsuarioSchema = Schema({
    nombre:{
        type : String,
        require: [true, 'Nombre de estado requerido']
    },
    email:{
        type: String,
        require: [true, 'Correo requerido'],
        unique: true
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

module.exports = model('Usuario', UsuarioSchema)