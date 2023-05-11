const div = document.querySelector("div")
const h1 = document.querySelector("h1")

const pintarH1 = () =>{
    const clone = div.cloneNode(true)
    clone.querySelector("h1").textContent = " Cambiado desde JS"
    div.appendChild(clone)
} 
pintarH1()