let projectos=[
    {nombre:"My first landing page", imagen:"./img/first-landing-page.jpg",
     link:"https://yamkrun.github.io/mi_portafolio/practica_calificada1/",
    },
    {nombre:"Instagram login form clone", imagen:"./img/ig.jpg",
        link:"https://yamkrun.github.io/mi_portafolio/practica_calificada2/",
    },
    {nombre:"Landing page inspired by the Winx universe",imagen:"./img/winx.jpg",
        link:"https://yamkrun.github.io/mi_portafolio/practica_calificada3/",
    },
    {nombre:"anding page with puppies – Grid layout practice", imagen:"./img/te-cuido.jpg",
        link:"https://yamkrun.github.io/mi_portafolio/d%C3%ADa-4/d%C3%ADa-4-tarde/",
    },
    {nombre:"Sailor Moon card landing page", imagen:"./img/sailor-moon.jpg",
        link:"https://yamkrun.github.io/mi_portafolio/d%C3%ADa-6/",
    },
    {nombre:"Lollapalooza-style interactive cards",imagen:"./img/concert.jpg",
        link:"https://yamkrun.github.io/mi_portafolio/d%C3%ADa-7-tarde/",
    },
    {nombre:"Responsive layout practice using only divs", imagen:"./img/responsive.jpg",
        link:"https://yamkrun.github.io/mi_portafolio/d%C3%ADa-8/d%C3%ADa-8-tarde/",
    },
    {nombre:"Responsive dog adoption page with light and dark mode", imagen:"./img/perritos.jpg",
        link:"https://yamkrun.github.io/mi_portafolio/d%C3%ADa-9/d%C3%ADa-9-tarde/",
    },
    {nombre:" A responsive website for a bookstore and physical library with light and dark mode support", imagen:"./img/biblioteca.jpg",
        link:"https://yamkrun.github.io/mi_portafolio/d%C3%ADa-10/",
    },
]

let contenedorProyectos= document.querySelector("#proyectos");

function mostrarProyectos(array) {
  for (let i = 0; i < array.length; i++) {
    contenedorProyectos.innerHTML += `
      <div class="w-full h-95 bg-[#1f1333] rounded-2xl shadow-lg hover:shadow-violet-600/40 hover:scale-105 transition-all flex flex-col">
        
        <img src="${array[i].imagen}" alt="${array[i].nombre}" class="w-full h-48 object-cover rounded-t-2xl" />
        
        <div class="p-4 flex flex-col flex-grow justify-between items-center text-center gap-3">
          <h3 class="text-violet-300 text-xl font-semibold">${array[i].nombre}</h3>
          
          <a href="${array[i].link}">
            <button class="font-bold bg-violet-700 text-white px-4 py-2 rounded-xl text-sm hover:bg-violet-900 transition-all cursor-pointer">
              Ver Proyecto
            </button>
          </a>
        </div>
      </div>
    `;
  }
}
mostrarProyectos(projectos);

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