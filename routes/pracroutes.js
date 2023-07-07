const express = require("express")
const router =  express.Router()
const {gethome, getbooks, postbook, bookorm} = require("../controllers/praccontrollers")

router.route("/").get(gethome).post(getbooks)
router.route("/add_book").post(postbook).get(bookorm)

module.exports = router