// bind element 
const btn_genarate = document.getElementById("genarate");
const title = document.getElementById("number_qute");
const quote = document.getElementById("quote");
// url in adviceslip => api
const url = 'https://api.adviceslip.com/advice';
// method get random quote in api
const Generate_Text =()=>{
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res=>{
        return res.slip
    })
    .then(res=>{
        title.innerHTML = 'ADVICE # ' + res.id
        quote.innerHTML = res.advice          
    })
}
// call Generate_Text and get random quote in api
btn_genarate.addEventListener('click', Generate_Text)