const send = require("send");

const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar."];
const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
                "A person of words and not deeds is like a garden full of weeds.",
                "Allow compassion to guide your decisions.",
                "All the effort you are making will ultimately pay off.",
                "Accept something that you cannot change, and you will feel better."];
const destinationInspiration = [
    {
        type: "city",
        imageURL: "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
        name: "London, UK"
    },
    {
        type: "beach",
        imageURL: "https://i2.wp.com/blog.vivaaerobus.com/wp-content/uploads/2019/12/Mejores-Playas-de-Cancún.jpg?resize=1280%2C640&ssl=1",
        name: "Cancun, Mexico"
    },
    {   
        type: "nature",
        imageURL: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F04%2F19-mount-rainier-national-park-washington-BESTHIKE0407.jpg",
        name: "Mount Rainier National Park, WA. U.S.A."
    }
];

const destinationsBucketlist = [];

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
    },
    getTravelRecommendation: (req,res) =>{
        console.log('hit');
        const {option} = req.params;
        let targetID = destinationInspiration.findIndex(place => place.type === option);
        let targetPlace = destinationInspiration[targetID]
        res.status(200).send(targetPlace);
    },
    addDestinationToBucketlist: (req, res) => {
        const {name, description, imageURL} = req.body;
        let newDestination = {
            name,
            description,
            imageURL
        };
        destinationsBucketlist.push(newDestination);
        res.status(200).send(destinationsBucketlist);
    }
}