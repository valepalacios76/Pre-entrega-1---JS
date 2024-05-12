// VARIABLES Y CONSTANTES necesarias para la ejecución del código
const contenedorShop = document.getElementById("productosShop");
const tablaBody = document.getElementById("tablabody")
const carrito = [];
const urlJSON = "../baseDeDatos/productos.json"
let totalCarrito = JSON.parse(localStorage.getItem('TotalCarrito')) || 0;



window.onload = function() {
    mostrarProductosEnCarrito();
};



// FUNCIONES

// Función para traer y convertir JSON
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

// Función para imprimir productos agregados al carrito en una tabla en el DOM 
function mostrarProductosEnCarrito() {
    const carritoGuardado = JSON.parse(localStorage.getItem('Carrito')) || [];
    for (const producto of carritoGuardado) {
        tablaBody.innerHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.color}</td>
                <td>$${producto.precio}</td>
            </tr>
        `;
    }
}


// Función para crear e inyectar tarjetas de productos en el DOM
function mostrarProductos(listaProductos){
    for(const prod of listaProductos){
        contenedorShop.innerHTML += `
        <div class="card tarjeta" style="width: 12rem;">
            <img src="${prod.foto}" class="card-img-top fotoProd" alt="${prod.color}">
            <div class="card-body alinearTarj">
                <h5 class="card-title tituloCarta">${prod.color}</h5>
                <p class="card-text">Price: $${prod.precio}</p>
                <button type="button" class="btn btn-primary btnCompra" id="${prod.id}">BUY</button>
            </div>
        </div>
        `
    }

// Botón para comprar
    const botonesCompra = document.getElementsByClassName("btnCompra")

    for (const btn of botonesCompra){
        btn.addEventListener("click", () => {
            const prodCarrito = listaProductos.find(prod => prod.id == btn.id);
            agregarACarrito(prodCarrito);
            sumarCarrito(prodCarrito)
        })

    }

}

// Utilizando JSON convertido en un array de objetos para usarlo como parámetro de la función mostrarProductos()
TraerJSON(urlJSON)
    .then((datos) => {
        mostrarProductos(datos);
    })

// Función que pushea cada producto hacia la tabla (carrito) de compras
function agregarACarrito(producto){
    carrito.push(producto);
    tablaBody.innerHTML += `
    <tr>
        <td>${producto.id}</td>
        <td>${producto.color}</td>
        <td>$${producto.precio}</td>
    </tr>
    `
    guardarCarrito()
}

// Función para sumar el precio final de los productos
function sumarCarrito(producto){
    const total = document.getElementById("total");
    totalCarrito += producto.precio
    total.innerText = "Total to pay: $" + totalCarrito;
}


//STORAGE

// Función que guarda en el local Storage el carrito para poder conservarlo al recargar la página
function guardarCarrito() {
    localStorage.setItem('Carrito', JSON.stringify(carrito));
}

// Botón para borrar el carrito
const boton = document.getElementById("btnBorrar");
boton.addEventListener("click", borrarTabla);

// Función para vacíar la tabla en caso de haberte confundido al cargar los productos (también resetea el total de los productos sumados)
function borrarTabla(){
    tablaBody.innerHTML = "";
    totalCarrito = 0;
    localStorage.removeItem('Carrito');
    localStorage.removeItem('TotalCarrito');
    const total = document.getElementById("total");
    total.innerText = "Total to pay: $" + totalCarrito;
}
