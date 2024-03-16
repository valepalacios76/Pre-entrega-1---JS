// Variables globales
let nombre = prompt("¡Bienvenido a nuestra tienda de cosméticos!\nDinos tu nombre 🤩")
let email = prompt("Ahora ingresa tu email")
let categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄 Escriba el código numérico\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Iluminadores\n5) Ir a pagar\n0) Salir"));
let labiales;
let bases;
let sombras;
let iluminadores;
let total = 0;
let pago;

// Funciones
function efectivo(total){
    let resultadoEfectivo = total * 0.10
    return total - resultadoEfectivo
}

function debito(total){
    let resultadoDebito = total * (1 + 0.05)
    return resultadoDebito
}

function credito(total){
    let resultadoCredito = total * (1 + 0.10)
    return resultadoCredito
}



while (categoria !== 0){
    switch (categoria) {
        case 1:
            labiales = parseInt(prompt("¡Buena elección " + nombre + "!\nEstos son los colores disponibles, ¡elíge el tuyo! 💄\n\n1) Rojo intenso ... $500\n2) Nude natural ... $400\n3) Morado oscuro ... $600\n4) Volver al menú principal"))
    
            while (labiales != 4){
                if (labiales == 1){
                    total = total + 500
                    alert("¡Labial Rojo intenso añadido al carrito!🛒\nTotal a pagar: $" + total)
    
                } else if (labiales == 2){
                    total = total + 400
                    alert("¡Labial Nude natural añadido al carrito!🛒\nTotal a pagar: $" + total)
    
                } else if (labiales == 3){
                    total = total + 600
                    alert("¡Labial Morado oscuro añadido al carrito!🛒\nTotal a pagar: $" + total)
    
                } else {
                    alert("Ingresaste un número que no corresponde a las opciones dadas 😬")
                }
                labiales = parseInt(prompt("¡Buena elección " + nombre + "!\nEstos son los colores disponibles, ¡elíge el tuyo! 💄\n\n1) Rojo intenso ... $500\n2) Nude natural ... $400\n3) Morado oscuro ... $600\n4) Volver al menú principal"))
            }
            categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Iluminadores\n5) Ir a pagar\n0) Salir"));
    
            break;
    
    
        case 2:
            bases = parseInt(prompt("¡Buena elección " + nombre + "!\nEstos son los tonos disponibles, ¡elíge el tuyo! 👩🏻👩🏽👩🏿\n\n1) Beige claro ... $500\n2) Bronceado medio ... $500\n3) Oscuro ... $500\n4) Volver al menú principal"))
    
            while (bases != 4){
                if (bases == 1){
                    total = total + 500
                    alert("¡Base Beige claro añadida al carrito!🛒\nTotal a pagar: $" + total)
    
                } else if (bases == 2){
                    total = total + 500
                    alert("¡Base Bronceado medio añadida al carrito!🛒\nTotal a pagar: $" + total)
    
                } else if (bases == 3){
                    total = total + 500
                    alert("¡Base oscuro añadida al carrito!🛒\nTotal a pagar: $" + total)
    
                } else {
                    alert("Ingresaste un número que no corresponde a las opciones dadas 😬")
                }
                bases = parseInt(prompt("¡Buena elección " + nombre + "!\nEstos son los tonos disponibles, ¡elíge el tuyo! 💄\n\n1) Beige claro ... $500\n2) Bronceado medio ... $500\n3) Oscuro ... $500\n4) Volver al menú principal"))
            }
                categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Iluminadores\n5) Ir a pagar\n0) Salir"));
    
            break;
    
    
    
        case 3:
            sombras = parseInt(prompt("¡Buena elección " + nombre + "!\nEstas son las paletas de sombras disponibles, ¡elíge el tuyo! 🙌🏼\n\n1) Colección Tonos neutros ... $800\n2) Colección Tonos cálidos ... $1000\n3) Colección Tonos fríos ... $1000\n4) Volver al menú principal"))
    
            while (sombras != 4){
                if (sombras == 1){
                    total = total + 800
                    alert("¡Paleta Colección Tonos neutros añadida al carrito!🛒\nTotal a pagar: $" + total)
    
                } else if (sombras == 2){
                    total = total + 1000
                    alert("¡Paleta Colección tonos cálidos añadida al carrito!🛒\nTotal a pagar: $" + total)
    
                } else if (sombras == 3){
                    total = total + 1000
                    alert("¡Paleta Colección tonos fríos añadida al carrito!🛒\nTotal a pagar: $" + total)
    
                } else {
                    alert("Ingresaste un número que no corresponde a las opciones dadas 😬")
                }
                sombras = parseInt(prompt("¡Buena elección " + nombre + "!\nEstas son las paletas de sombras disponibles, ¡elíge la tuya! 💄\n\n1) Colección Tonos neutros ... $800\n2) Colección Tonos cálidos ... $1000\n3) Colección Tonos fríos ... $1000\n4) Volver al menú principal"))
            }
    
            categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Iluminadores\n5) Ir a pagar\n0) Salir"));
    
            break;
    
    
        case 4:
            iluminadores= parseInt(prompt("¡Buena elección " + nombre + "!\nEstos son los tonos disponibles, ¡elíge el tuyo! ✨\n\n1) Rose Gold ... $500\n2) Dorado ... $300\n3) Plateado ... $300\n4) Volver al menú principal"))
    
            while (iluminadores != 4){
                if (iluminadores == 1){
                    total = total + 500
                    alert("¡Iluminador Rose Gold añadido al carrito!🛒\nTotal a pagar: $" + total)
    
                } else if (iluminadores == 2){
                    total = total + 300
                    alert("¡Iluminador Dorado añadido al carrito!🛒\nTotal a pagar: $" + total)
    
                } else if (iluminadores == 3){
                    total = total + 300
                    alert("¡Iluminador Plateado añadido al carrito!🛒\nTotal a pagar: $" + total)
    
                } else {
                    alert("Ingresaste un número que no corresponde a las opciones dadas 😬")
                }
                iluminadores= parseInt(prompt("¡Buena elección " + nombre + "!\nEstos son los tonos disponibles, ¡elíge el tuyo! 💄\n\n1) Rose Gold ... $500\n2) Dorado ... $300\n3) Plateado ... $300\n4) Volver al menú principal"))
            }
    
            categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Iluminadores\n5) Ir a pagar\n0) Salir"));
    
            break;
        

        case 5:
            let totalPagar = total
            let pago = parseInt(prompt("El total de tu compra es $" + total + "\n¿Con qué método deseas pagar? 💵🤑\n\n1) Efectivo (tendrás un 10% de descuento en tu compra) 🤫\n2) Tarjeta de débito (tendrás un recargo del 5%)\n3) Tarjeta de crédito (tendrás un recargo del 10%)"))

            switch (pago) {
                case 1:
                    alert("¡Gracias por tu compra! 😃\nEl total de tu compra con el descuento del 10% es de: $" + efectivo(total) + "\n\nPuedes acercarte a cualquier Pago Fácil con el siguiente código: #A5N2G8F")
                    break;

                case 2:
                    alert("¡Gracias por tu compra! 😃\nEl total de tu compra con el recargo del 5% es de: $" + debito(total) + "\n\nTe llegará un email para continuar con el pago con tarjeta. ¡Revisa tu bandeja de entrada!")
                    break;
                
                case 3:
                    alert("¡Gracias por tu compra! 😃\nEl total de tu compra con el recargo del 10% es de: $" + credito(total) + "\n\nTe llegará un email para continuar con el pago con tarjeta al email:\n" + email + "\n\n¡Revisa tu bandeja de entrada!")
                    break;

                default:
                    alert("Ingresaste un número que no corresponde a las opciones dadas 😬")
                    break;
            }
            
            let opcionesFinales = parseInt(prompt("¡Gracias por confiar en nosotros!\n¿Qué quieres hacer ahora?\n1) Volver al menú principal\n2) Salir")) 

            switch (opcionesFinales) {
                case 1:
                    categoria = parseInt(prompt(nombre + " ¿En cuál categoría de nuestros productos estás interesada? 💄\n\n1) Labiales\n2) Bases de maquillaje\n3) Paletas de sombras\n4) Iluminadores\n5) Ir a pagar\n0) Salir"));
                    total = 0

                    break;
                
                case 2:
                    categoria = 0;
                    break;

                default:
                    alert("Ingresaste un número que no corresponde a las opciones dadas 😬")
                    break;

            }
    }
}


