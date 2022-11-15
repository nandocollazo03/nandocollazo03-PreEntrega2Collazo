class Articulo {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

let articulos = [];
let listaPedido = [];

const mesaRatona = new Articulo("Mesa ratona", "Mesa ratona de tres patas", 1500);
const setDeVajilla = new Articulo("Set de vajilla", "Set de vajilla de 20 piezas", 950);

articulos.push(mesaRatona);
articulos.push(setDeVajilla);

const agregarArticulo = () => {
    let opcion = prompt("¿Deseas agregar un artículo a nuestra web? - 1-Sí / 2-No")

    while (opcion === '1') {
        let nombre = prompt('Ingresa el nombre del producto');
        let descripcion = prompt('Ingresa la descripción del producto');
        let precio = parseInt(prompt('Ingresa el precio del producto'));

        const articuloObj = new Articulo(nombre, descripcion, precio);
        articulos.push(articuloObj);

        opcion = prompt("¿Deseas agregar otro artículo a nuestra web? - 1-Sí / 2-No")
    }

    document.write("<b>Agregaste los siguientes artículos a nuestra web:</b>");
    document.write("<br>");

    for (let i = 0; i < articulos.length; i++) {
        document.write(`Artículo: ${articulos[i].nombre}`);
        document.write("<br>");
        document.write(`Descripción: ${articulos[i].descripcion}`);
        document.write("<br>");
        document.write(`Precio: ${articulos[i].precio}`);
        document.write("<br>");
        document.write("<br>");
    }
}

const realizarPedido = () => {
    let total = 0;
    let opcion = prompt("¿Deseas agregar un producto a tu pedido? - 1-Sí / 2-No")

    while (opcion === '1') {
        let nombre = prompt('Ingresa el nombre del producto');

        for (let i = 0; i < articulos.length; i++) {
            if (articulos[i].nombre === nombre) {
                listaPedido.push(articulos[i]);
            }
        }
        opcion = prompt("¿Deseas agregar otro artículo a tu pedido? - 1-Sí / 2-No")
    }

    document.write("<b>Agregaste los siguientes artículos a tu carrito de compras:</b>");
    document.write("<br>");

    for (let i = 0; i < listaPedido.length; i++) {
        total += listaPedido[i].precio;

        document.write(`Artículo: ${articulos[i].nombre}`);
        document.write("<br>");
        document.write(`Precio: ${articulos[i].precio}`);
        document.write("<br>");
        document.write("<br>");
    }

    document.write(`Precio total: ${total}`);
}

//agregarArticulo();
realizarPedido();