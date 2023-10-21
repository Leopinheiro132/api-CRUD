const mongoose = require("mongoose");

const AlternativasSchema = new mongoose.Schema({
    alternativaText: String,
    correta: Boolean,
},{ _id: false })


const PerguntaSchema = new mongoose.Schema({
    id: Number,
    texto: String,
    alternativas: [AlternativasSchema],
});

const Pergunta = mongoose.model('Pergunta', PerguntaSchema);

module.exports = Pergunta;
