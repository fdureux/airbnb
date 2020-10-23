const express = require("express");
const router = express.Router();

const users = require("./users");
const travels = require("./travels");
const pictures = require("./pictures");
const reservations = require("./reservations");

router.use("/users", users);
router.use("/travels", travels);
router.use("/pictures", pictures);
router.use("/reservations", reservations);

module.exports = router;
