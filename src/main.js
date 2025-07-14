import { CategoriaContoller } from "./views/categorias/categoriaController";
import { ProductoController } from "./views/productos/productoController";



let main = document.querySelector('main');


window.addEventListener('hashchange',async () =>{
    const hash = window.location.hash.slice(1);      
    cargarVistas(hash);
})


window.addEventListener('DOMContentLoaded',async () =>{
    const hash = window.location.hash.slice(1);              
    if (hash) {                                             
        cargarVistas(hash);
    } 
    
})


const cargarVistas =  async (hash) =>{
    if (!hash){
        main.textContent = "No cargo la pagina.."             
        return;
    }
        const vista = await fetch(`src/views/${hash}/index.html`);   
        const respuesta = await vista.text();                                               
       main.innerHTML = respuesta;    
    for(let x = 0; x < objetos.length ; x++ ){
        
        if(hash == objetos[x].nombre)
        {
            const valor = await fetch(objetos[x].url);
            const body = await valor.text();
            main.innerHTML = body;
            objetos[x].controller(main);
        }
    }                                                            
} 





const objetos = 
[
    {
        nombre : "categorias",
        url : "/src/views/categorias/index.html",
        controller : CategoriaContoller,
    },
    {
        nombre : "productos",
        url : "/src/views/productos/index.html",
        controller : ProductoController,
    }
    
]


