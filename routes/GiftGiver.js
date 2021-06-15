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

router.get("/start", async(req, res, next) => {
    try {
        const questions = GiftGiver.quiz();
        
        res.status(200).json(questions);
    } catch (err) {
        next(err);
    }
})

router.post("/results", async(req, res, next) => {
    try {
        const answers = req.body;
        GiftGiver.quizResults(answers);
    } catch (err) {
        next(err);
    }
})



module.exports = router;