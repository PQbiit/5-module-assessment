const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar."];
const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
                "A person of words and not deeds is like a garden full of weeds.",
                "Allow compassion to guide your decisions.",
                "All the effort you are making will ultimately pay off.",
                "Accept something that you cannot change, and you will feel better."];

function getRandomItem(itemArray){
    let randomIndex = Math.floor(Math.random() * itemArray.length);
    return randonItem = itemArray[randomIndex];
}
            
module.exports = {
    getCompliment: (req,res) =>{
        // choose random compliment
        let randomCompliment = getRandomItem(compliments);
        res.status(200).send(randomCompliment);
    },
    getFortune: (req,res) =>{
        let randomFortune = getRandomItem(fortunes);
        res.status(200).send(randomFortune);
    }
}