const { Router } = require('express')
const { 
    createMarca, 
    getMarcas, 
    getMarcaByID,
    updateMarcaByID,
    deleteMarcaByID
}= require('../controllers/marca')

const router = Router()

/* Crea una marca */
router.post('/', createMarca)

/* Consulta todas las marcas */
router.get('/', getMarcas)

/* Consulta marca por su ID */
router.get('/:id', getMarcaByID)

/* Actualiza marca por su ID */
router.put('/:id', updateMarcaByID)

/* Elimina marca por su ID */
router.delete('/:id', deleteMarcaByID)

module.exports = router
