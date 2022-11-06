//El proyecto se basa en realizar un simulador de una tienda online para una marca que vende Articulos de librería
// y Material Didactico para nivel inicial 

const precioLibretas = 3000;
const precioPizarras = 1600;
const precioCalendarios = 2000;
const precioStickers = 450;

const precioMarionetas = 3500;
const precioPaneles = 2500;
const precioFigurasDeMadera = 800;
const precioRompeCabezas= 1000;

let flag;
const libretas = "Libretas";
const pizarras = "Pizarras";
const calendarios = "Calendarios";
const stickers = "Stickers";

const marionetas = "Marionetas";
const paneles = "Paneles";
const figurasDeMadera = "Figuras de Madera";
const rompeCabezas = "Rompe Cabezas";

let total=0;
let opcionErrorLibreria = false;
let opcionErrorRecursoDidactico= false;

function imprimirMensaje (){
    alert("Bienvenido al Mamboreta");
}

imprimirMensaje();

do{
    let artLibreriaAComprar;
    if (!opcionErrorLibreria){
        artLibreriaAComprar = prompt(`Ingrese la opcion del articulo de Libreria que desea comprar
        1.${libretas}
        2.${pizarras}
        3.${calendarios}
        4.${stickers}
        5. Nada
        `);

    switch(artLibreriaAComprar){
        case "1":
            total+=precioLibretas;
            break;
        case "2":
            total+=precioPizarras;
            break;
        case "3":
            total+=precioCalendarios;
            break;
        case "4":
            total+=precioStickers;
            break;
        case "5":
            break;
        default:
            opcionErrorLibreria = true;
            break;
    }
    
    if(opcionErrorLibreria){
        alert("Ingrese una opcion valida");
        opcionErrorLibreria = false;
        flag = "Y";
        continue;
    }

    } else {
        opcionErrorRecursoDidactico=false;
    }
    
    const artRecursoDidacticoAComprar = prompt(
        "Ingrese la opcion del Recurso Didactico que desea comprar \n1."+ marionetas +"\n2." + paneles +"\n3." + figurasDeMadera + "\n4." + rompeCabezas +"\n5. Nada"
    );

    switch(artRecursoDidacticoAComprar){
        case "1":
            total+=precioMarionetas;
            break;
        case "2":
            total+=precioPaneles;
            break;
        case "3":
            total+=precioFigurasDeMadera;
            break;
        case "4":
            total+=precioRompeCabezas;
            break;
        case "5":
            break;
        default:
            opcionErrorRecursoDidactico = true;
            break;
    }
    if (opcionErrorRecursoDidactico){
        alert("Ingrese una opcion valida");
        flag = "Y";
        continue;
    }

    if (artLibreriaAComprar == 5 && artRecursoDidacticoAComprar ==5){
        break;
    }

    flag = prompt ("Desea comprar otro elemento? Y/N");
    console.log("flag ", flag);
} while (flag == "Y");

console.log("Total ",total);