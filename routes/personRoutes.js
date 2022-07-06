const router = require('express').Router() // configurando a rota post
const Person = require('../models/Person')
// post
router.post('/', async (req, res)=> {

const {name, password } = req.body

if(!name){
        res.status(422).json({error: 'o nome é obrigatorio'})
     }
const person = {
        name,
        password,
     }
try{
    await Person.create(person)
    res.status(201).json({message:'USUARIO CADASTRATO COM SUCESSO'})
}catch(error){
    res.status(500).json({ error:error })
}
}) 
// Get
router.get('/', async (req, res)=>{
    try{
         const people = await Person.find()
         res.status(200).json(people)
    }catch(error){
        res.status(500).json({error:error})
    } 
})

module.exports = router