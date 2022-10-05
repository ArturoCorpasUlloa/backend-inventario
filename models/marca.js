const { Schema, model} = require("mongoose");

const MarcaSchema = Schema({
    nombre:{
        type : String,
        require: [true, 'Nombre de marca requerido']
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

module.exports = model('Marca', MarcaSchema)