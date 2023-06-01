const express = require("express");
// const bcrypt = require("bcrypt");
// const {auth} = require("../middlewares/auth");
// const {UserModel,validUser, validLogin,createToken} = require("../models/userModel")
const router = express.Router();

router.get("/", async(req, res) => {
    res.json({msg: "users work"})
})

module.exports = router;