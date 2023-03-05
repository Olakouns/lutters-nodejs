const express = require('express');
const router = express.Router();

// Require controller modules.

const lutterController = require("../controllers/lutteurs-controller");

// GET request for list of all LUTTER.
router.get("/", lutterController.getLutters);

// GET REQUEST FOR CREATING LUTTER : JUST DISPLAY THE PAGE
router.get("/create", lutterController.createLutterGet);

// POST REQUEST FOR CREATING LUTTER
router.post("/create", lutterController.createLutterPost);

// POST REQUEST FOR CREATING LUTTER
router.get("/:id", lutterController.getDetailLutter);

// GET request to update LUTTER.
router.get("/:id/update", lutterController.updateLutterGet);

// POST request to update LUTTER.
router.put("/:id/update", lutterController.updateLutterPost);

// GET request to delete LUTTER.
router.get("/:id/delete", lutterController.deleteLutterGet);

// POST request to delete LUTTER.
router.delete("/:id/delete", lutterController.deleteLutterPost);

module.exports = router;
