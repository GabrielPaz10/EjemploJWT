const express = require('express')
const cors= require('cors')


class Server{
    constructor(){
        this.app= express()
        this.port= process.env.PORT
        //conectar base de datos
        
        //middlewares
        this.middleware()
        //rutas
        this.routes()
    }


    // async conectarDB(){
    //     await dbConnection()
    // }
    routes(){
        //this.app.use('/api/auth',require('../routes/auth'))
        this.app.use('/api',require('../rutas/prueba'))
        
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Proyecto escuchando en http://localhost:'+this.port)
        })
    }
    middleware(){
        //CORS
        this.app.use(cors())
        //PARSEO Y LECTURA DEL BODY JSON
        this.app.use(express.json())
    }
}

module.exports= Server