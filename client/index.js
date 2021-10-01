const complimentButton = document.querySelector('#complimentButton');
const complimentParagraph = document.querySelector('#compliment');
const fortuneParagraph = document.querySelector('#fortune');
const travelForm = document.querySelector('#travel-inspitation-form');
const travelFormList = document.querySelector('#travel-inspitation-list');
const placePhoto = document.querySelector('#place-photo');
const placeName = document.querySelector('#place-name');
const travelSuggestionForm = document.querySelector('#travel-suggestion-form');
const destinationName = document.querySelector('#destination-name');
const destinationDescription = document.querySelector('#destination-description');
const destinationImage = document.querySelector('#destination-image');
const bucketlistContainer = document.querySelector('#bucketlist-container');

const baseURL = "http://localhost:4000";

travelForm.addEventListener('submit',event =>{
    event.preventDefault();
    let option = travelFormList.value;
    if(option !== ""){
        axios.get(`${baseURL}/api/travel/${option}`).then(res =>{
            let imageURL = res.data.imageURL;
            let placeTitle = res.data.name;
            placePhoto.src = imageURL;
            placeName.textContent = placeTitle;
        }).catch(error =>{
            console.log(error);
        });
    }
});

travelSuggestionForm.addEventListener('submit', event =>{
    event.preventDefault();
    let name = destinationName.value;
    let description = destinationDescription.value;
    let image = destinationImage.value;
    let newDestination = {
        name: name,
        description: description,
        imageURL: image
    }
    axios.post(`${baseURL}/api/travel`,newDestination).then(res =>{
        let items = res.data;
        displayBucketlistItems(items);
    }).catch(error =>{
        console.log(error);
    })
});

complimentButton.addEventListener('click',()=>{
    axios.get(`${baseURL}/api/compliment`).then((res) => {
        const complimentText = res.data;
        complimentParagraph.textContent = complimentText;
    }).catch(error =>{
      console.log(error);
    });
});

function getFortune(){
    axios.get(`${baseURL}/api/fortune`).then(res =>{
        const fortuneText = res.data;
        fortuneParagraph.textContent = fortuneText;
    }).catch(error =>{
        console.log(error);
    })
}

function displayBucketlistItems(itemsArr){
    bucketlistContainer.innerHTML = ``
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = "Your destinations bucketlist";
    bucketlistContainer.appendChild(sectionTitle);
    for (let i = 0; i < itemsArr.length; i++) {
        const destinationCard = document.createElement('div')
        destinationCard.classList.add('destination-card');
        destinationCard.innerHTML = `<img src=${itemsArr[i].imageURL} class="card-image"/>
        <h4>${itemsArr[i].name}</h4>
        <p>${itemsArr[i].description}</p>`

        bucketlistContainer.appendChild(destinationCard);
    }
}

getFortune();