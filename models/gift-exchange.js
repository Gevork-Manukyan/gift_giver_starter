const { get } = require("../routes/gift-exchange");

class GiftExchange {
    static async pairs (names) {
        //Pairs people together and returns array of arrays
        let pairArr = [];
        
        while (names.length > 0) {
            let index = await this.getRandomNumber(0, names.length);
            let tempArr = [];
            tempArr.push(names[index]);
            names.splice(index, 1);

            index = await this.getRandomNumber(0, names.length);
            tempArr.push(names[index]);
            names.splice(index, 1);

            pairArr.push(tempArr);
        }

        return pairArr;
    }

    /**
     * 
     * @param {Int} min 
     * @param {Int} max 
     * @returns Returns value between min and max-1
     */
    static async getRandomNumber(min, max) {
        min = Math.floor(min);
        max = Math.max(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    static async traditional (names) {
        //Pairs people but the gift reciever of the 1st is the giver of the second
        //"they is giving a gift to us",
        //"us is giving a gift to me",
        //returns array of strings
        const playerPairs = this.pairs(names);
        
    }
}

module.exports = GiftExchange;