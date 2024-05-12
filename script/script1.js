const contenedorProds = document.getElementById("productos");
let carrito = []
let urlJSON = "../data/productos.json"
const idsProductos = [1, 4, 7];

async function TraerJSON(url){
    try{
        // Traer JSON y guardarlo en una constante
        const solicitud = await fetch(url)
        // Convertir json para poder utilizarlo
        const datos = await solicitud.json()
        return datos;
    }
    // "atrapando" el error
    catch (error){
        console.error("Error: " + error);
    }
}


// Función para mostrar las cards de productos
function mostrarProductos(listaProductos){
    const productosMasComprados = listaProductos.filter((prod) => idsProductos.includes(prod.id))

    productosMasComprados.forEach((prod) => {
        contenedorProds.innerHTML += `
        <div class="card tarjeta" style="width: 12rem;">
            <img src="${prod.foto}" class="card-img-top fotoProd" alt="${prod.color}">
            <div class="card-body alinearTarj">
                <h5 class="card-title tituloCarta">${prod.color}</h5>
                <p class="card-text">Price: $${prod.precio}</p>
                <button class="btn btn-primary btnCompra1 linkBtn" id="${prod.id}"><a href="shop.html">SHOP</a></button>
            </div>
        </div>
        `
    })
}

TraerJSON(urlJSON)
    .then((datos) => {
        mostrarProductos(datos);
    })



