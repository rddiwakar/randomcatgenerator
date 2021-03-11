document.getElementById("btn1").addEventListener("click",(event) => {
    
    fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json()).then(addingCat)
    event.preventDefault();
})

function addingCat(res){
 let div = document.getElementById("container")
 div.innerHTML = ""
 let img = document.createElement("img")
 div.appendChild(img)
 img.setAttribute("src",(res[0].url))
}
document.getElementById("btn2").addEventListener("click",(event) => {
    
    fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()).then(addingDog)
    event.preventDefault();
})
function addingDog(res){
    let div = document.getElementById("container")
    div.innerHTML = ""
    let img = document.createElement("img")
    div.appendChild(img)
    img.setAttribute("src",(res.message))
   }