const express = require("express");
const GiftGiver = require("../models/GiftGiver");
const router = express.Router();


router.get("/", async (req, res, next) => {
    try {
        res.status(200).json({quiz: "quiz"});
    } catch (err) {
        next(err);
    }
})


module.exports = router;