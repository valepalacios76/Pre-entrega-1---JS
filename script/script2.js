const contenedorShop = document.getElementById("productosShop");
const tablaBody = document.getElementById("tablabody")
const carrito = [];
let totalCarrito = JSON.parse(localStorage.getItem('TotalCarrito')) || 0;

window.onload = function() {
    mostrarProductosEnCarrito();
};

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

    const botonesCompra = document.getElementsByClassName("btnCompra")

    for (const btn of botonesCompra){
        btn.addEventListener("click", () => {
            const prodCarrito = listaProductos.find(prod => prod.id == btn.id);
            agregarACarrito(prodCarrito);
            sumarCarrito(prodCarrito)
        })

    }

}

mostrarProductos(productosArray);

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

function sumarCarrito(producto){
    const total = document.getElementById("total");
    totalCarrito += producto.precio
    total.innerText = "Total to pay: $" + totalCarrito;
}


// Utilización de Storage

function guardarCarrito() {
    localStorage.setItem('Carrito', JSON.stringify(carrito));
}

const boton = document.getElementById("btnBorrar");
boton.addEventListener("click", borrarTabla);

function borrarTabla(){
    tablaBody.innerHTML = "";
    totalCarrito = 0;
    localStorage.removeItem('Carrito');
    localStorage.removeItem('TotalCarrito');
    const total = document.getElementById("total");
    total.innerText = "Total to pay: $" + totalCarrito;
}

