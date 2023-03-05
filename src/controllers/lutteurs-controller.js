const Lutter = require("../models/lutteurs");

exports.getLutters = async (req, res) => {
    res.send(await Lutter.getAllLutters())
}

exports.createLutterGet = (req, res) => {
    // res.render('lutters/create', { title: "Create lutters", lutter: null })
}

exports.createLutterPost = async (req, res) => {
    res.send(await Lutter.addLutter(req.body));
}

exports.getDetailLutter = async (req, res) => {
   res.send(await Lutter.getOneLutter(req.params.id));
}

exports.updateLutterGet = (req, res) => {

}

exports.updateLutterPost = async (req, res) => {
    res.send(await Lutter.updateLutter(req.params.id, req.body))
}

exports.deleteLutterGet = (req, res) => {
    res.send("deleteLutterGet");
}

exports.deleteLutterPost = async (req, res) => {
    res.send(await Lutter.deleteLutter(req.params.id));
}