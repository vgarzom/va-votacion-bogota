console.log("loading routes")
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send("API is working")
});

// Load here the whole api routes
router.use("/alcaldia", require("./alcaldia"));
router.use("/senado", require("./senado"));
router.use("/presidencia_v1", require("./presidencia_v1"));
router.use("/presidencia_v2", require("./presidencia_v2"));
router.use("/camara", require("./camara"));
router.use("/concejo", require("./concejo"));
router.use("/jal", require("./jal"));
router.use("/all", require("./all"));

module.exports = router;