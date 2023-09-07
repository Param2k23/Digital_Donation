const express = require("express")
const sessionControllerDb = require("../controller/sessionController")

const router = express.Router()

router.post("/signup",sessionControllerDb.signup)
router.post("/login",sessionControllerDb.login)

module.exports = router