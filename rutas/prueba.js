const {Router} = require('express')
const {suma,
    mensaje
} = require('../controladores/prueba')

const {
    validarJWT
} = require('../middlewares/validar-jwt')

const router = Router()

router.post('/suma',suma)
router.get('/mensaje',[validarJWT],mensaje)


module.exports= router