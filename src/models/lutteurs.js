const mongoose = require('mongoose');

const LutterSchema = new mongoose.Schema({
    nom : {type : String},
    prenom : {type : String},
    pseudonyme : {type : String},
    poids : {type : Number},
    images : {type : String},
});

const Lutter = mongoose.model('Lutter', LutterSchema)


exports.getAllLutters = async () => {
    return await Lutter.find();
}

exports.addLutter = async (newLutter) => {
    let lutter = new Lutter(newLutter);
    lutter.save(err => {
        if (err != null) {
            result = {
                success: false,
                message : `Some error occure :${err} `
            };
        } 
        result =  {
            success: true,
            message: "Lutter saved"
        };
    })
}

exports.getOneLutter  = async (idLutter) => {
    return await Lutter.findById(idLutter)
}

exports.updateLutter = async (idLutter, lutterUpdate) => {
    return Lutter.findByIdAndUpdate(
        idLutter,
        lutterUpdate,
        {new : true}
    )
}

exports.deleteLutter = async (idLutter) => {
    return Lutter.findByIdAndRemove(idLutter)
}

// module.exports =  Lutter 