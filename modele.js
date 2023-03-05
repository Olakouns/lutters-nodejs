const mongoose = require('mongoose');

const ApprenantSchema = new mongoose.Schema({
    nom : {type : String},
    moyenne : {type : Number, min: 0, max: 20},
});

const Apprenant = mongoose.model('Apprenant', ApprenantSchema)

module.exports =  Apprenant 
