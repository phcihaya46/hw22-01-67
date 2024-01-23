const express = require("express")
const rounter = express.Router()
const authController = require("../controllers/auth-controllers")

rounter.post("/register",authController.register)
rounter.post("/login",authController.login)
rounter.post("/forget-pssword",authController.forgetPassword)
rounter.get("/forget-pssword/:token",authController.veritfyForgetPassword)
rounter.post("/reset-password/:token",authController.resetPassword)


module.exports = rounter;