const express = require("express")
const router = express.Router();

const gifts = {
    ring: 0,
    car: 0,
    cards: 0,
    money: 0
}

router.get("/", async(req, res, next) => {
    res.status(200).json(gifts);
})

router.post("/:giftName", async(req, res, next) => {
    const giftName = req.params.giftName;

    if ( (gifts[giftName]) || (gifts[giftName] ===0) ) {
        gifts[giftName]++;
    }

    res.status(200).json(gifts);
})


module.exports = router;