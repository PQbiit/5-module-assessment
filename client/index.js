const complimentButton = document.querySelector('#complimentButton');
const complimentParagraph = document.querySelector('#compliment');
const fortuneParagraph = document.querySelector('#fortune');
const travelForm = document.querySelector('#travel-ideas-form');
const travelFormList = document.querySelector('#travel-ideas-list');
const placePhoto = document.querySelector('#place-photo');
const placeName = document.querySelector('#place-name');

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
})

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

getFortune();