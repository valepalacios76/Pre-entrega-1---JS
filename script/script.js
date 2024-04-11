// Variables globales
let nombre = prompt("¡Bienvenido a nuestra tienda de cosméticos!\nDinos tu nombre 🤩");
let email = prompt("Ahora ingresa tu email");
let categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄 Escriba el código numérico\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Ir a pagar\n5) Buscar producto\n6) Filtrar por marca\n0) Salir"));
let total = 0;
let pago;


// Funciones
function efectivo(total){
    let resultadoEfectivo = total * 0.10
    return total - resultadoEfectivo;
}

function debito(total){
    let resultadoDebito = total * (1 + 0.05)
    return resultadoDebito;
}

function credito(total){
    let resultadoCredito = total * (1 + 0.10)
    return resultadoCredito;
}

function filtrarPorMarca(marca){
    let filtrados = [];

    if (marca == 1) {
        filtrados = productosArray.filter(producto => producto.marca == "Loreal")
    } else if (marca == 2) {
        filtrados = productosArray.filter(producto => producto.marca == "Maybelline")
    } else if (marca == 3) {
        filtrados = productosArray.filter(producto => producto.marca == "Natura")
    } else if (marca == 4) {
        filtrados = productosArray.filter(producto => producto.marca == "Avon")
    } else {
        alert("No trabajamos con esa marca 🙁")
    };
    
    console.table(filtrados);
}



while (categoria !== 0){
    switch (categoria) {
        case 1:
            labiales = parseInt(prompt(`¡Buena elección ${nombre}!\nEstos son los colores disponibles, ¡elíge el tuyo! 💄\n\n1) ${labialRojo.color} ... $${labialRojo.precio}\n2) ${labialNude.color} ... $${labialNude.precio}\n3) ${labialMorado.color} ... $${labialMorado.precio}\n4) Volver al menú principal`));
    
            while (labiales != 4){
                if (labiales == 1){
                    total = total + labialRojo.precio;
                    alert(`¡Labial ${labialRojo.color} añadido al carrito!🛒\nTotal a pagar: $${total}`);
    
                } else if (labiales == 2){
                    total = total + labialNude.precio;
                    alert(`¡Labial ${labialNude.color} añadido al carrito!🛒\nTotal a pagar: $${total}`);
    
                } else if (labiales == 3){
                    total = total + labialMorado.precio;
                    alert(`¡Labial ${labialMorado.color} añadido al carrito!🛒\nTotal a pagar: $${total}`);
    
                } else {
                    alert("Ingresaste un número que no corresponde a las opciones dadas 😬");
                }
                labiales = parseInt(prompt(`¡Buena elección ${nombre}!\nEstos son los colores disponibles, ¡elíge el tuyo! 💄\n\n1) ${labialRojo.color} ... $${labialRojo.precio}\n2) ${labialNude.color} ... $${labialNude.precio}\n3) ${labialMorado.color} ... $${labialMorado.precio}\n4) Volver al menú principal`));
            }
            categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄 Escriba el código numérico\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Ir a pagar\n5) Buscar producto\n6) Filtrar por marca\n0) Salir"));
    
            break;
    
    
        case 2:
            bases = parseInt(prompt(`¡Buena elección ${nombre}!\nEstos son los tonos disponibles, ¡elíge el tuyo! 👩🏻👩🏽👩🏿\n\n1) ${baseClaro.tono} ... $${baseClaro.precio}\n2) ${baseMedio.tono} ... $${baseMedio.precio}\n3) ${baseOscuro.tono} ... $${baseOscuro.precio}\n4) Volver al menú principal`));
    
            while (bases != 4){
                if (bases == 1){
                    total = total + baseClaro.precio;
                    alert(`¡Base ${baseClaro.tono} añadida al carrito!🛒\nTotal a pagar: $${total}`);
    
                } else if (bases == 2){
                    total = total + baseMedio.precio
                    alert(`¡Base ${baseMedio.tono} añadida al carrito!🛒\nTotal a pagar: $${total}`);
    
                } else if (bases == 3){
                    total = total + baseOscuro.precio
                    alert(`¡Base ${baseOscuro.tono} añadida al carrito!🛒\nTotal a pagar: $${total}`);
    
                } else {
                    alert("Ingresaste un número que no corresponde a las opciones dadas 😬");
                }
                bases = parseInt(prompt(`¡Buena elección ${nombre}!\nEstos son los tonos disponibles, ¡elíge el tuyo! 👩🏻👩🏽👩🏿\n\n1) ${baseClaro.tono} ... $${baseClaro.precio}\n2) ${baseMedio.tono} ... $${baseMedio.precio}\n3) ${baseOscuro.tono} ... $${baseOscuro.precio}\n4) Volver al menú principal`));
            }
            categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄 Escriba el código numérico\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Ir a pagar\n5) Buscar producto\n6) Filtrar por marca\n0) Salir"));
    
            break;
    
    
        case 3:
            sombras = parseInt(prompt(`¡Buena elección ${nombre}!\nEstas son las paletas de sombras disponibles, ¡elíge la tuya! 🙌🏼\n\n1) Colección ${sombrasCalida.coleccion} ... $${sombrasCalida.precio}\n2) Colección ${sombrasNeutra.coleccion} ... $${sombrasNeutra.precio}\n3) Colección ${sombrasFria.coleccion} ... $${sombrasFria.precio}\n4) Volver al menú principal`));
    
            while (sombras != 4){
                if (sombras == 1){
                    total = total + sombrasCalida.precio;
                    alert(`¡Paleta Colección ${sombrasCalida.coleccion} añadida al carrito!🛒\nTotal a pagar: $${total}`);
    
                } else if (sombras == 2){
                    total = total + sombrasNeutra.precio;
                    alert(`¡Paleta Colección ${sombrasNeutra.coleccion} añadida al carrito!🛒\nTotal a pagar: $${total}`);
    
                } else if (sombras == 3){
                    total = total + sombrasFria.precio;
                    alert(`¡Paleta Colección ${sombrasFria.coleccion} añadida al carrito!🛒\nTotal a pagar: $${total}`);
    
                } else {
                    alert("Ingresaste un número que no corresponde a las opciones dadas 😬");
                }
                sombras = parseInt(prompt(`¡Buena elección ${nombre}!\nEstas son las paletas de sombras disponibles, ¡elíge la tuya! 🙌🏼\n\n1) Colección ${sombrasCalida.coleccion} ... $${sombrasCalida.precio}\n2) Colección ${sombrasNeutra.coleccion} ... $${sombrasNeutra.precio}\n3) Colección ${sombrasFria.coleccion} ... $${sombrasFria.precio}\n4) Volver al menú principal`));
            }
    
            categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄 Escriba el código numérico\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Ir a pagar\n5) Buscar producto\n6) Filtrar por marca\n0) Salir"));
    
            break;
        

        case 4:
            let pago = parseInt(prompt("El total de tu compra es $" + total + "\n¿Con qué método deseas pagar? 💵🤑\n\n1) Efectivo (tendrás un 10% de descuento en tu compra) 🤫\n2) Tarjeta de débito (tendrás un recargo del 5%)\n3) Tarjeta de crédito (tendrás un recargo del 10%)"))

            switch (pago) {
                case 1:
                    alert("¡Gracias por tu compra! 😃\nEl total de tu compra con el descuento del 10% es de: $" + efectivo(total) + "\n\nPuedes acercarte a cualquier Pago Fácil con el siguiente código: #A5N2G8F")
                    break;

                case 2:
                    alert("¡Gracias por tu compra! 😃\nEl total de tu compra con el recargo del 5% es de: $" + debito(total) + "\n\nTe llegará un email para continuar con el pago con tarjeta de débito a la dirección:\n" + email + "\n\n¡Revisa tu bandeja de entrada!")
                    break;
                
                case 3:
                    alert("¡Gracias por tu compra! 😃\nEl total de tu compra con el recargo del 10% es de: $" + credito(total) + "\n\nTe llegará un email para continuar con el pago con tarjeta de crédito a la dirección:\n" + email + "\n\n¡Revisa tu bandeja de entrada!")
                    break;

                default:
                    alert("Ingresaste un número que no corresponde a las opciones dadas 😬")
                    break;
            }
            
            let opcionesFinales = parseInt(prompt("¡Gracias por confiar en nosotros!\n¿Qué quieres hacer ahora?\n1) Volver al menú principal\n2) Salir")) 

            switch (opcionesFinales) {
                case 1:
                    categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Ir a pagar\n5) Buscar producto\n6) Filtrar por marca\n0) Salir"));
                    total = 0

                    break;
                
                case 2:
                    categoria = 0;
                    break;

                default:
                    alert("Ingresaste un número que no corresponde a las opciones dadas 😬")
                    break;
            }
            break;


        case 5:
            let categoriaBusqueda = parseInt(prompt("¿Qué categoría de producto estás buscando? 👀\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Vovler al menú principal"));
            
            switch (categoriaBusqueda) {
                case 1:
                    let colorLabial = prompt("Ingresa el color del labial que estás buscando para obtener información del producto 💄\nColores disponibles: Rojo, Nude y Morado").toLowerCase();
            
                    let labialBuscado = labialesArray.find(labial => labial.color.toLowerCase().includes(colorLabial.toLowerCase()));
            
                    if (labialBuscado) {
                        alert(`Labial encontrado:\n\nID: ${labialBuscado.id}\nColor: ${labialBuscado.color}\nPrecio: $${labialBuscado.precio}`);
                    } else {
                        alert("No tenemos disponible ningún labial con ese color 🤷🏻‍♀️");
                    }
                    break;

                case 2:
                    let tonoBase = prompt("Ingresa el tono de la base que estás buscando para obtener información del producto 👩🏻👩🏽👩🏿\nTonos disponibles: Claro, Medio y Oscuro")

                    let baseBuscada = basesArray.find(base => base.tono.toLowerCase().includes(tonoBase.toLowerCase()))

                    if (baseBuscada) {
                        alert(`Base encontrada:\n\nID: ${baseBuscada.id}\nTono: ${baseBuscada.tono}\nPrecio: $${baseBuscada.precio}`)
                    } else {
                        alert("No tenemos disponible ningúna base con ese tono 🤷🏻‍♀️");
                    }
                    break;
                
                case 3:
                    let coleccionSombras = prompt("Ingresa la colección de paleta de sombras que estás buscando para obtener la información del producto 🙌🏼\nColecciones disponibles: Tonos calidos, Tonos neutros y Tonos frios")

                    let paletaBuscada = sombrasArray.find(paleta => paleta.coleccion.toLowerCase().includes(coleccionSombras.toLowerCase()))

                    if (paletaBuscada) {
                        alert(`Paleta de sombras encontrada:\n\nID: ${paletaBuscada.id}\nColección: ${paletaBuscada.coleccion}\nPrecio: $${paletaBuscada.precio}`)
                    } else {
                        alert("No tenemos disponible ningúna paleta de sombras con esa colección 🤷🏻‍♀️")
                    }
                    break;
                
                case 4:
                    categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄 Escriba el código numérico\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Ir a pagar\n5) Buscar producto\n6) Filtrar por marca\n0) Salir"));

                    break;

                default:
                    alert("No ingresaste una categoría válida")
                    break;  
            }

            break;
        
        
        case 6:
            let marcaElegida = parseInt(prompt("Elíge la marca de los productos que quieres consultar\n Marcas disponibles:\n1) Loreal\n2) Maybelline\n3) Natura\n4) Avon"))

            filtrarPorMarca(marcaElegida);
            categoria = 0
            break;
    }
}


