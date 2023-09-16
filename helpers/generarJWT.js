const jwt = require('jsonwebtoken')
const generarJWT=  (body)=>{
    return new  Promise((resolve,reject)=>{
        const payload ={body}
        jwt.sign(payload,process.env.FIRMA,{
            expiresIn: '5h'
        },(err,token)=>{
            if (err) {
                console.log(err)
                reject('No se pudo generar el token')
            }else{
                console.log(token)
                resolve(token)
            }
        })
    })
}

module.exports = {
    generarJWT
}