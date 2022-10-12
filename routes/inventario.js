const { Router } = require('express')

const { 
    getInventarios,
    createInventario,
    getInventarioByID,    
    deleteInventarioByID,
    updateInventarioByID,
    uploadImageByID,
    getImageByID
} = require('../controllers/inventario')

const router = Router()
router.get('/', getInventarios)
router.post('/', createInventario)
router.get('/:id', getInventarioByID)
router.put('/:id', updateInventarioByID)
router.put('/:id', deleteInventarioByID)

// Subida de Foto de inventario

router.post('/:id/images',uploadImageByID);

// Get foto de inventario

router.get('/:id/images',getImageByID);

module.exports = router