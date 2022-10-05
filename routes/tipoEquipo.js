const {Router} = require('express')
const {
    createTipoEquipo,
    getTipoEquipo,
    getTipoEquipoByID,
    updateTipoEquipoID,
    deleteTipoEquipoByID
} = require('../controllers/tipoEquipo')

const router = Router();

/* Crea tipo de equipo */
router.post('/', createTipoEquipo);

/* Consulta todos los tipos de equipos*/
router.get('/', getTipoEquipo)

/* Consulta tipo de equipo por ID */
router.get('/:id', getTipoEquipoByID)

/* Actualiza un tipo de equipo por ID */
router.put('/:id',updateTipoEquipoID)

/* Elimina tipo de equipo por ID */
router.delete('/:id',deleteTipoEquipoByID)

module.exports = router