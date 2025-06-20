export const CategoriaContoller = async () => {
    const llamar = await fetch("https://jsonplaceholder.typicode.com/posts");
    const info = await llamar.json();
    console.log(info);
}
