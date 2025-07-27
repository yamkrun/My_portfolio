let habilidades = [
    {nombre: "HTML", logo:"./img/img.icons8.png", habilidad:"85%"},
    {nombre: "CSS", logo:"./img/css.png", habilidad:"65%"},
    {nombre: "JavaScript", logo:"./img/javascript.png", habilidad:"65%"},
    {nombre: "VS Code", logo:"./img/vscode.png", habilidad:"70%"},
    {nombre: "Git", logo:"./img/GIT.png", habilidad:"50%"},
    {nombre: "Git Hub", logo:"./img/GITHUB.png", habilidad:"55%"},
    {nombre: "Tailwind CSS", logo:"./img/tailwindcss.png", habilidad:"75%"},
]

let herramienta =document.querySelector("#herramientas")

function mostrarHabilidades(hab){
for (let i = 0; i < hab.length; i++) {

    herramienta.innerHTML +=`<div class="hover:drop-shadow-[0_0_12px_violet]">
  <div class="w-30 h-54 sm:w-40 sm:h-64 rounded-2xl bg-white/10 backdrop-blur p-3 my-2 hover:scale-105 flex flex-col items-center justify-between">
    
    <h3 class="text-center font-bold text-lg mt-1">${hab[i].nombre}</h3>
    
    <img src="${hab[i].logo}" alt="${hab[i].nombre} logo" class="w-20 h-20 object-contain mt-2" />
    
     <div class="w-full mt-4">
      <div class="w-full h-3 bg-violet-200 rounded-full">
        <div class="h-full bg-violet-600 rounded-full transition-all duration-500" style="width: ${hab[i].habilidad};"></div>
      </div>
      <h6 class="text-sm text-center text-white mt-1 font-semibold">${hab[i].habilidad}</h6>
    </div>

  </div>
</div>`
    
}
    herramienta.innerHTML+=`<a href="./cv/CURRICULUM pdf.pdf" download
                       class=" bg-violet-700 rounded-2xl text-xs p-2 w-30 md:w-40 hover:bg-violet-900 hover:scale-105 
                       cursor-pointer focus:bg-violet-900 focus:scale-105 lg:col-auto lg:text-xl lg:p-4 inline-block text-white text-center">
                     <strong>Download CV</strong>
                      </a> `}

mostrarHabilidades(habilidades);
export{mostrarHabilidades}