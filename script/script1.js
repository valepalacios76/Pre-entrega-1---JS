const contenedorProds = document.getElementById("productos");
let carrito = []

function mostrarProductos(listaProductos){
    for(const prod of listaProductos){
        contenedorProds.innerHTML += `
        <div class="card tarjeta" style="width: 12rem;">
            <img src="${prod.foto}" class="card-img-top fotoProd" alt="${prod.color}">
            <div class="card-body alinearTarj">
                <h5 class="card-title tituloCarta">${prod.color}</h5>
                <p class="card-text">Price: $${prod.precio}</p>
                <button class="btn btn-primary btnCompra1 linkBtn" id="${prod.id}">SHOP</button>
            </div>
        </div>
        `
    }

    const botonesCompra = document.getElementsByClassName("btnCompra")

    for (const btn of botonesCompra){
        btn.addEventListener("click", () => {
            const prodCarrito = listaProductos.find(prod => prod.id == btn.id);
            agregarACarrito(prodCarrito);
        })

    }

}

mostrarProductos(productosComprados);


