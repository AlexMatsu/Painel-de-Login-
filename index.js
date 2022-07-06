// definindo dependencias 
const express = require('express') //criar as rotas
const cors = require('cors') // fazer as autenciações
const mongoose = require('mongoose') // comunicar com banco de dados
const port = 3000


// chamar espress ( ) na const app
const app = express()

//definir uso do json
app.use(express.json()) // usar o express com jason 

//cors
app.use((req, res, next)=>{
    res.header("access-Control-Allow-Origin","*") //receber requisição de qualquer lugar
    res.header("access-Control-Allow-Methods","GET,POST") 
    res.header("access-Control-Allow-Hearders","*") // definição autenticação (senha,tokens)
    app.use(cors())
    next()    
})


// criar rota
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

//middleware
app.use (
    express.urlencoded({
        extended: true,
    })
)

// escutar a porta 
//app.listen(port) 

//conexãp com banco de dados
mongoose.connect('mongodb+srv://admin:admin@cluster0.jugqk90.mongodb.net/?retryWrites=true&w=majority').then(
    () => {
        app.listen(port) 
        console.log('Conectou no banco de dados')
        
    }
)

