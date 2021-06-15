const express = require("express")
const GiftExchange = require("../models/gift-exchange");
const router = express.Router();


router.get("/", async(req, res, next) => {
    try {
        res.status(200).json({gift: "ring"});
    } catch (err) {
        next(err);
    }
})

router.post("/new-game", async(req, res, next) => {
    
    try {
        const playerList = req.body.names;
        await GiftExchange.traditional(playerList);

        res.status(200).json(playerList);
    } catch (err) {
        next(err);   
    }
})

router.post("/start-game", async(req, res, next) => {
    try {   
        const playerList = req.body.names;
        await GiftExchange.traditional(playerList);

        res.status(200).json(playerList);
    } catch (err) {
        next(err);
    }
})


module.exports = router;