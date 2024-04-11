// Labiales
class Labial{
    constructor(id, color, precio, marca){
        this.id = id;
        this.color = color;
        this.precio = precio;
        this.marca = marca;
    };
};
const labialRojo = new Labial(1, "Rojo Intenso", 1500, "Loreal");
const labialNude = new Labial(2, "Nude Natural", 1400, "Maybelline");
const labialMorado = new Labial(3, "Morado Oscuro", 1600, "Loreal");
// Array labiales
const labialesArray = [labialRojo, labialNude, labialMorado];


// Bases de maquillaje
class Base{
    constructor(id, tono, precio, marca){
        this.id = id;
        this.tono = tono;
        this.precio = precio;
        this.marca = marca;
    };
};
const baseClaro = new Base(4, "Tono Claro", 2500, "Natura");
const baseMedio = new Base(5, "Tono Medio", 2500, "Maybelline");
const baseOscuro = new Base(6, "Tono Oscuro", 2500, "Avon");
// Array Bases
const basesArray = [baseClaro, baseMedio, baseOscuro];


// Paletas de sombras para ojos
class Sombras{
    constructor(id, coleccion, precio, marca){
        this.id = id;
        this.coleccion = coleccion;
        this.precio = precio;
        this.marca = marca;
    };
};
const sombrasCalida = new Sombras(7, "Tonos Calidos", 3800, "Avon");
const sombrasNeutra = new Sombras(8, "Tonos Neutros", 3500, "Natura");
const sombrasFria = new Sombras(9, "Tonos Frios", 3800, "Loreal");
// Array Sombras
const sombrasArray = [sombrasCalida, sombrasNeutra, sombrasFria];

// Array de todos los productos
const productosArray = [labialRojo, labialNude, labialMorado, baseClaro, baseMedio, baseOscuro, sombrasCalida, sombrasNeutra, sombrasFria]


