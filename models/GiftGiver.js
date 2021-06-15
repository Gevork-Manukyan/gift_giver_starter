

class GiftGiver {
    static async quiz () {
        //starts quiz by sending questions
        return [{
            question: "What genre do you like?",
            answerChoices: [
                "a. Action",
                "b. Slice of Life",
                "c. Sci-Fi",
                "d. Romance",
                "e. Documentary"
            ]
        },
        {
            question: "What would you rather have?",
            answerChoices: [
                "a. Flat Screen T.V.",
                "b. High Quality Lotion",
                "c. Expensive Clothing",
                "d. $1000 Grub Hub Credit",
                "e. New Lether Couches"
            ]
        },
        {
            question: "What is your favorite color?",
            answerChoices: [
                "a. Blue",
                "b. Green",
                "c. Pink",
                "d. Yellow",
                "e. White"
            ]
        },
        {
            question: "What do you look for in a gift shop?",
            answerChoices: [
                "a. Gagits",
                "b. Key Chains",
                "c. Food",
                "d. Picture Frames",
                "e. Clothes"
            ]
        }]
        
    }

    static async quizResults (answers) {
        //returns result of quiz based on answers given

    }
}



module.exports = GiftGiver;