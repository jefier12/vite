import { CategoriaContoller } from "./views/categorias/categoriaController";
import { ProductoController } from "./views/productos/productoController";

let main = document.querySelector('main');//DETECTA EL CONTENEDOR MAIN PARA LUEGO METER LA INFORMACION

window.addEventListener('hashchange',async () =>{
    const hash = window.location.hash.slice(1);      //AL PRESIONAR UNA SECCION QUITARLE EL NUMERAL AL HREF DE LA CATEGORIA
    cargarVistas(hash);
})

window.addEventListener('DOMContentLoaded',async () =>{
    ProductoController();
    const hash = window.location.hash.slice(1);              
    if (hash) {                                             //VALIDA QUE AL CARGAR LA PAGINA EXISTA
        cargarVistas(hash);
    } 
    for (let index = 0; index < array.length; index++) {
        
    }

})

const cargarVistas =  async (hash) =>{
    if (!hash){
        main.textContent = "No cargo la pagina.."             // RETORNA UN ERROR AL NO HALLAR EL HASH
        return;
    }
    const vista = await fetch(`src/views/${hash}/index.html`);   //ACEDE A LA RUTA
    const respuesta = await vista.text();                        //ACEDE AL TEXTO                       
    main.innerHTML = respuesta;                                  //UNA UNION CON EL CONTENEDOR MAIN
} 

const objetos = 
[
    {
        nombre : "Categorias",
        url : "/src/views/categorias/index.html",
        controller : CategoriaContoller,
    },
    {
        nombre : "Productos",
        url : "/src/views/productos/index.html",
        controller : ProductoController,
    }
    
]


