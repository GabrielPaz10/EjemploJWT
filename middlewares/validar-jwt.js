const { response, request } = require('express')
const jwt= require('jsonwebtoken')

const validarJWT= async(req=request,res=response,next)=>{
    const btoken = req.header('Authorization')
    const token = btoken.split(' ')[1]
    if (!token) {
        return res.status(401).json({
            msg: 'No tiene acceso a esta funcion'
        })
    }
    try {
        const {body}=jwt.verify(token,process.env.FIRMA)
        console.log(body)
        
        // const usuarioAu = await usuario.findById(uid)
        // if (!usuarioAu) {
        //     return res.status(401).json({
        //         msg:'Token no valido - usuario no encontrado'
        //     })
        // }
        // verificar si el usuarioAu, esta borrado
        // if (!usuarioAu.estado) {
        //     return res.status(401).json({
        //         msg:'Token no valido - usuario desactivado'
        //     })
        // }
        
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
    
    
}




module.exports = {
    validarJWT
}