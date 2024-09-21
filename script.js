let nombre = prompt('Por favor ingrese su nombre y apellido');

if (nombre == "" || nombre == null) {
    alert("No ingresaste nombre de usuario, vuelve a cargar la pagina si deseas continuar");
} else {
    alert('Bienvenida/o ' + nombre + '. En esta pagina te ensenaremos a agregar productos a tu carro de compras y finalizar la misma');
}

// Informo los precios de los productos
let productos = ['\n 1) fundas $8000', '\n 2) cargadores $15000', '\n 3) vidrios templados $7500'];
let precioproducto1 = 8000;
let precioproducto2 = 15000;
let precioproducto3 = 7500;

const Listado = [
    { id: 1, producto: 'Fundas', precio: 8000 },
    { id: 2, producto: 'Cargadores', precio: 15000 },
    { id: 3, producto: 'Vidrios templados', precio: 7500 }
];

const guardarlocal = (clave, valor) => { localStorage.setItem(clave, valor); };
guardarlocal('ListaProductos', JSON.stringify(productos));

let totalCompra = 0; // el precio es 0 antes de comenzar la compra
let continuar = true; //indico que si continuar es true se van a sumar los precios de los productos

while (continuar) {
    let eleccionproducto = prompt('Elige un número para agregar a nuestro carro:' + productos);
    if (eleccionproducto == "" || eleccionproducto == null) {
        alert("No podemos continuar");
    } else {
        if (eleccionproducto == '1') {
            console.log('El usuario ' + nombre + ' eligió el producto 1 que cuesta $' + precioproducto1);
            totalCompra += precioproducto1;
        } else if (eleccionproducto == '2') {
            console.log('El usuario ' + nombre + ' eligió el producto 2 que cuesta $' + precioproducto2);
            totalCompra += precioproducto2;
        } else if (eleccionproducto == '3') {
            console.log('El usuario ' + nombre + ' eligió el producto 3 que cuesta $' + precioproducto3);
            totalCompra += precioproducto3;
        } else {
            alert('No tenemos el producto seleccionado');
        }
    }

    //Mientras el confirm tenga un número válido se va a poder ir agregando nuevos productos
    continuar = confirm('¿Quiere elegir más productos?');
    if (!continuar) {
        break;
    }
}

console.log('La compra total de ' + nombre + ' es $' + totalCompra);
alert('Gracias por tu compra, ' + nombre + '. El total de tu compra es $' + totalCompra);

// funcion para aplicar el descuento si la compra supera los $35000
function aplicarDescuentoSiEsNecesario(total, funcionDescuento) {
    if (total >= 35000) {
        return funcionDescuento(total); // aplica el descuento si el total es mayor o igual a $35000
    } else {
        return total; // No aplica descuento si es menor a $35000
    }
}

// funcion que aplica el descuento del 20%
function calcularDescuento(total) {
    return total * 0.80;
}

// Calcular el total con descuento si es necesario
let totalConDescuento = aplicarDescuentoSiEsNecesario(totalCompra, calcularDescuento);

if (totalConDescuento < totalCompra) {
    alert("Se te aplico un descuento del 20% por una compra superior a $35000. El total con descuento es de $" + totalConDescuento);
} else {
    alert("El total de tu compra es $" + totalConDescuento + " (No se aplico descuento, si la compra supera los $35000 se te otorga un 20% de descuento)");
}

console.log('El total final de ' + nombre + ' es $' + totalConDescuento);

// Función para validar el celular
function esCelularValido(contactar) {
    const regex = /^\d{10,13}$/; // Solo permite entre 10 y 13 dígitos (En estos me ayude con IA)
    return regex.test(contactar); // Verifica si el número es válido (En estos me ayude con IA)
}

// pedir el celular
function CelularValido() {
    let contactar;
    while (true) {
        contactar = prompt('Por favor ingrese su numero de celular para poder contactarlo y finalizar la compra');
        console.log('El número de celular de ' + nombre + ' es ' + contactar); // Aca quedar en el console.log el número para contactarlo

        if (!esCelularValido(contactar)) {
            alert('Su numero no fue agregado. Por favor ingrese un numero válido (solo digitos y de 10 a 13 caracteres).');
        } else {
            alert(nombre + ", en unos instantes el vendedor se contactará con usted para finalizar la compra.");
            break;
        }
    }
}

// Llamada a la función para pedir el número de celular
CelularValido();


//guardar compra en el storage
function guardarCompraEnStorage(nombre, productos, totalCompra, totalConDescuento) {
    const datosCompra = {
        nombreUsuario: nombre,
        productosSeleccionados: productos,
        totalCompra: totalCompra,
        totalConDescuento: totalConDescuento,
        fechaCompra: new Date().toLocaleString() // Guardar la fecha de la compra
    };

    // guardar los datos como una cadena JSON en el localStorage
    localStorage.setItem('compra', JSON.stringify(datosCompra));
}

// llamo a la funcion despues de calcular el total
guardarCompraEnStorage(nombre, productos, totalConDescuento);

//recuperar y mostrar la compra guardada en storage
function mostrarStorageCompra() {
    const compraAlmacenada = localStorage.getItem('compra');
    
    if (compraAlmacenada) {
        const datosCompra = JSON.parse(compraAlmacenada); // Convertir el JSON en un objeto
        console.log('Compra almacenada:', datosCompra);
        console.log(`Compra de ${datosCompra.nombreUsuario} realizada el ${datosCompra.fechaCompra}. Total: $${datosCompra.totalCompra}`);
    } else {
        console.log('No se encontraron compras almacenadas.');
    }
}

// Llamar a esta función cuando necesites ver la compra almacenada
mostrarStorageCompra();



























