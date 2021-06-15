const express = require("express")
const GiftExchange = require("../models/gift-exchange");
const router = express.Router();


router.get("/", async(req, res, next) => {
    console.log("enttered")
    try {
        res.status(200).json({gift: "ring"});
    } catch (err) {
        next(err);
    }
})

router.post("/new-game", async(req, res, next) => {
    
    try {
        let playerList = req.body.names;
        playerList = await GiftExchange.traditional(playerList);

        res.status(200).json(playerList);
    } catch (err) {
        next(err);   
    }
})

router.post("/start-game", async(req, res, next) => {
    try {   
        let playerList = req.body.names;
        playerList = await GiftExchange.traditional(playerList);

        res.status(200).json(playerList);
    } catch (err) {
        next(err);
    }
})


module.exports = router;