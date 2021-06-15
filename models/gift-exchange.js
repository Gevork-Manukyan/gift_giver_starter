const { NotFoundError, BadRequestError } = require("../Utils/errors");

class GiftExchange {
    static async pairs (names) {
        //Pairs people together and returns array of arrays
        const pairArr = [];
        
        while (names.length > 0) {
            let index = await this.getRandomNumber(0, names.length);
            const tempArr = [];
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

        if (names.length % 2 != 0)
            throw new BadRequestError("You need an even number of people to play");

        if (names.length === 0)
            throw new BadRequestError("You need atleast 2 players")

        const playerPairs = await this.pairs(names);

        const pairPhraseArr = [];
        for (let index = 0; index < playerPairs.length; index++) {

            pairPhraseArr.push(`${playerPairs[index][0]} is giving a gift to ${playerPairs[index][1]}`);
            pairPhraseArr.push(`${playerPairs[index][1]} is giving a gift to ${playerPairs[(index + 1) % 3][0]}`);
        }
        return pairPhraseArr;
    }
}

module.exports = GiftExchange;