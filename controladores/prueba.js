const {response} = require('express')
const {generarJWT} = require('../helpers/generarJWT')
const suma = async (req, res)=>{

    const {num1, num2} = req.body
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            msg: 'Los valores deben ser numericos'
        })
    }
    const token = await generarJWT({num1, num2,mensaje:'Hola mundo'})
    res.status(200).json({
        resultado: num1+num2,
        token
    })
}

const mensaje = async (req, res)=>{
    res.status(200).json({
        msg: 'Hola mundo'
    })
}
module.exports = {
    suma,
    mensaje
}