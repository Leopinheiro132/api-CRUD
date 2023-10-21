const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Pergunta = require('./model\'s/models');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
    db.once('open', () => {
        console.log('Conexão com o MongoDB estabelecida com sucesso.');
});


const port = process.env.PORT || 3000
app.use(bodyParser.json());
app.get('/', async (req,res) =>{
    try {
        const perguntas = await Pergunta.find();
        res.status(200).json(perguntas);
    } catch (err) {
        res.status(500).json({err:'ERRRO AO BUSCAR'})
    }
})
app.post('/', async (req, res)=>{
    try {
        const newPergunta = new Pergunta(req.body);
        await newPergunta.save();
        res.status(201).json(newPergunta);
    } catch (err) {
        res.status(500).json({err:'erro ao criar'});
    }
})
app.delete('/:id', async (req, res)=>{
    try {
        const pergunta = await Pergunta.findOneAndDelete({ _id: req.params.id });
        if(!pergunta){
            return res.status(404).json({err: 'questão n encontada'})
        }
        res.status(200).json({msg:`pergunta com o id: ${req.params.id}`})
    } catch (error) {
        res.status(404).json({err: `questão não pode ser apagada devido ${error}`})
    }
})
app.put('/:id', async (req, res)=>{
    try {
        const pergunta = await Pergunta.findOneAndUpdate({ _id: req.params.id }, req.body,{ new: true });
        console.log(req.params.id)
        if(!pergunta){
            return res.status(404).json({err: 'questão não encontada'})
        }
        res.status(200).json({msg: `pergunta com o id: ${req.params.id} atualizada com sucesso`})
    } catch (error) {
        res.status(404).json({err: `não deu para atualizar devido devido ${error}`})
    }
})

app.listen(port, ()=>{
    console.log(`server rodando em http://localhost:${port}`)
})
