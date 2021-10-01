const complimentButton = document.querySelector('#complimentButton');
const complimentParagraph = document.querySelector('#compliment');
const fortuneParagraph = document.querySelector('#fortune');
const baseURL = "http://localhost:4000"

complimentButton.addEventListener('click',()=>{
    axios.get(`${baseURL}/api/compliment`).then((response) => {
        const complimentText = response.data;
        complimentParagraph.textContent = complimentText;
    }).catch(error =>{
      console.log(error);
    });
});

function getFortune(){
    axios.get(`${baseURL}/api/fortune`).then(response =>{
        const fortuneText = response.data;
        fortuneParagraph.textContent = fortuneText;
    }).catch(error =>{
        console.log(error);
    })
}

getFortune();