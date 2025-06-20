export const ProductoController = async () => {
    const llamar = await fetch("http://localhost:8080/api/productos");
    const info = await llamar.json();
    const db = info.data;
    console.log(db);
}