import { mostrarHabilidades } from "./habilidades.js";

let botonAbrirMenu =document.querySelector("#abrirMenu");
let menu =document.querySelector("#menu")

botonAbrirMenu.addEventListener("click",function(e) {
    menu.classList.remove("hidden")
    menu.classList.add("flex")
})

menu.addEventListener("click",function(e){
    if(e.target.closest(".cerrar")){
        menu.classList.add("hidden")
    }
})