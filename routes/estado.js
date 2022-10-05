const { Router } = require('express')
const { 
    createEstado, 
    getEstados, 
    getEstadoByID,
    updateEstadoByID,
    deleteEstadoByID
} = require ('../controllers/estado.js')

const router = Router()

/* Crea un estado */
router.post('/',createEstado)

/* Consulta todos lo estados */
router.get('/', getEstados)

/* Consulta estado por ID */
router.get('/:id', getEstadoByID)

/* Actualiza estado por ID */
router.put('/:id', updateEstadoByID)

/* Elimina un estado por su ID */
router.delete('/:id', deleteEstadoByID)

module.exports = router