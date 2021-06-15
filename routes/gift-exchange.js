const express = require("express")
const GiftExchange = require("../models/gift-exchange");
const router = express.Router();


router.get("/", async(req, res, next) => {
    res.status(200).json({gift: "ring"});
})

router.post("/new-game", async(req, res, next) => {
    const playerList = req.body.names;
    GiftExchange.traditional(playerList);

    res.status(200).json(playerList);
})


module.exports = router;