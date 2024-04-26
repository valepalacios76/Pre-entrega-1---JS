// Lipstickes
class Lipstick{
    constructor(id, foto, color, precio, marca){
        this.id = id;
        this.foto = foto;
        this.color = color;
        this.precio = precio;
        this.marca = marca;
    };
};
const redLipstick = new Lipstick(1, "../media/labialRojo.JPG" , "Red Lipstick", 1500, "Loreal");
const nudeLipstick = new Lipstick(2, "../media/labialNude.JPG", "Nude Lipstick", 1400, "Maybelline");
const purpleLipstick = new Lipstick(3, "../media/labialMorado.JPG", "Dark Purple Lipstick", 1600, "Loreal");
// Array Lipstickes
const LipstickesArray = [redLipstick, nudeLipstick, purpleLipstick];


// Foundations de maquillaje
class Foundation{
    constructor(id, foto, color, precio, marca){
        this.id = id;
        this.foto = foto;
        this.color = color;
        this.precio = precio;
        this.marca = marca;
    };
};
const lightFoundation = new Foundation(4, "../media/baseClara.JPG", "Light Foundation", 2500, "Natura");
const mediumFoundation = new Foundation(5, "../media/baseMedia.JPG" ,"Medium Foundation", 2500, "Maybelline");
const darkFoundation = new Foundation(6, "../media/baseOscura.JPG", "Dark Foundation", 2500, "Avon");
// Array Foundations
const FoundationsArray = [lightFoundation, mediumFoundation, darkFoundation];


// Paletas de EyeShadow para ojos
class EyeShadow{
    constructor(id, foto, color, precio, marca){
        this.id = id;
        this.foto = foto;
        this.color = color;
        this.precio = precio;
        this.marca = marca;
    };
};
const warmEyeShadow = new EyeShadow(7, "../media/paletaCalida.JPG", "Warm Palette", 3800, "Avon");
const neutralEyeShadow = new EyeShadow(8, "../media/paletaNeutra.JPG", "Neutral Palette", 3500, "Natura");
const coldEyeShadow = new EyeShadow(9, "../media/paletaFria.JPG", "Cold Palette", 3800, "Loreal");
// Array EyeShadow
const EyeShadowArray = [warmEyeShadow, neutralEyeShadow, coldEyeShadow];

// Array de todos los productos
const productosArray = [redLipstick, nudeLipstick, purpleLipstick, lightFoundation, mediumFoundation, darkFoundation, warmEyeShadow, neutralEyeShadow, coldEyeShadow]

// Array de los productos mas comprados
const productosComprados = [mediumFoundation, redLipstick, warmEyeShadow];