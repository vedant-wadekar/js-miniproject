const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector(".randtxt")
const btn = document.querySelector(".randbtn");

const getFacts = async() => {
    console.log("getting data.....");
    let response =  await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data.fact);
    factPara.innerText = data.fact;
}   
getFacts();
btn.addEventListener("click",getFacts);