const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    _id: {type: Number},
    nombre: {type: String},
    director: {type: String},
    año: {type: Number},
    duracion: {type: Number},
    genero: {type: String},
})

module.exports = mongoose.model('Movie', movieSchema, 'movie');
